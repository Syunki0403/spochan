let audioContext: AudioContext | null = null;

/**
 * AudioContextを初期化・再開する（iPhone Safari対策）
 * ユーザー操作（Start押下）のタイミングで必ず呼ぶ
 */
export async function ensureAudio(): Promise<void> {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
}

/**
 * クラップ音を合成して再生する
 * 短いノイズ → バンドパスフィルター → エンベロープ
 */
export function playClap(): void {
  if (!audioContext) {
    console.warn("AudioContext not initialized");
    return;
  }

  const now = audioContext.currentTime;
  const duration = 0.08; // 80ms

  // ホワイトノイズ生成
  const bufferSize = audioContext.sampleRate * duration;
  const buffer = audioContext.createBuffer(
    1,
    bufferSize,
    audioContext.sampleRate
  );
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioContext.createBufferSource();
  noise.buffer = buffer;

  // バンドパスフィルター（クラップっぽい周波数帯域）
  const filter = audioContext.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1200;
  filter.Q.value = 1.0;

  // ゲインエンベロープ（急速に減衰）
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.3, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

  // 接続
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // 再生
  noise.start(now);
  noise.stop(now + duration);
}
