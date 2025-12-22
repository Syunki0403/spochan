"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "@/lib/menus";
import { ensureAudio, playClap } from "@/lib/audio";

interface LessonPlayerProps {
  menu: Menu;
}

type LessonState = "waiting" | "countdown" | "running" | "finished" | "stopped";

export default function LessonPlayer({ menu }: LessonPlayerProps) {
  const [state, setState] = useState<LessonState>("waiting");
  const [remainingSec, setRemainingSec] = useState(menu.durationSec);
  const [clapCount, setClapCount] = useState(0);
  const [nextInterval, setNextInterval] = useState(0);
  const [countdownValue, setCountdownValue] = useState(3);
  const [showClap, setShowClap] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // タイマーとクリーンアップ用のrefs
  const timersRef = useRef<Set<NodeJS.Timeout>>(new Set());
  const startTimeRef = useRef<number>(0);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lessonEndTimeRef = useRef<number>(0);

  // マウント時にクライアントサイドでのみ実行（Hydration対策）
  useEffect(() => {
    setIsMounted(true);
    // 初回訪問チェック（プログレッシブディスクロージャー）
    if (typeof window !== "undefined") {
      const visited = localStorage.getItem(`visited-${menu.id}`);
      setIsFirstVisit(!visited);
    }
  }, [menu.id]);

  const dismissGuide = () => {
    setShowGuide(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(`visited-${menu.id}`, "true");
    }
  };

  // 音テストボタン
  const handleTestClap = async () => {
    try {
      await ensureAudio();
      playClap();

      // 視覚的フィードバック
      setShowClap(true);
      setTimeout(() => setShowClap(false), 500);
    } catch (error) {
      console.error("音テストエラー:", error);
    }
  };

  // タイマーをすべてクリア
  const clearAllTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current.clear();
    if (updateIntervalRef.current) {
      clearInterval(updateIntervalRef.current);
      updateIntervalRef.current = null;
    }
  };

  // ランダムな間隔（3000〜5000ms）を取得
  const getRandomInterval = (): number => {
    return Math.random() * (5000 - 3000) + 3000;
  };

  // 次のクラップをスケジュール
  const scheduleNextClap = (currentTime: number) => {
    const interval = getRandomInterval();
    setNextInterval(interval);

    const nextClapTime = currentTime + interval;

    // レッスン終了時刻を超える場合はスケジュールしない
    if (nextClapTime > lessonEndTimeRef.current) {
      return;
    }

    const timerId = setTimeout(() => {
      const now = performance.now();

      // まだレッスン中かチェック
      if (now < lessonEndTimeRef.current) {
        playClap();
        setClapCount((prev) => prev + 1);

        // 視覚的フィードバック（フィードバックループ）
        setShowClap(true);
        setTimeout(() => setShowClap(false), 500);

        scheduleNextClap(now);
      }
    }, interval);

    timersRef.current.add(timerId);
  };

  // レッスン開始処理
  const startLesson = () => {
    const now = performance.now();
    startTimeRef.current = now;
    lessonEndTimeRef.current = now + menu.durationSec * 1000;

    setState("running");
    setClapCount(0);

    // 最初のクラップをスケジュール
    scheduleNextClap(now);

    // 残り時間を定期的に更新（100msごと）
    updateIntervalRef.current = setInterval(() => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const remaining = Math.max(0, menu.durationSec - elapsed / 1000);

      setRemainingSec(remaining);

      if (remaining <= 0) {
        // レッスン終了
        clearAllTimers();
        setState("finished");
      }
    }, 100);
  };

  // カウントダウン開始
  const handleStart = async () => {
    try {
      // AudioContextを初期化（iPhone Safari対策）
      await ensureAudio();

      setState("countdown");
      setCountdownValue(3);

      let count = 3;
      const countdownTimers: NodeJS.Timeout[] = [];

      const countdownTimer = setInterval(() => {
        count--;
        if (count > 0) {
          setCountdownValue(count);
        } else {
          clearInterval(countdownTimer);
          startLesson();
        }
      }, 1000);

      countdownTimers.push(countdownTimer);
      countdownTimers.forEach((t) => timersRef.current.add(t));
    } catch (error) {
      console.error("開始エラー:", error);
      setState("waiting");
    }
  };

  // 停止処理
  const handleStop = () => {
    clearAllTimers();
    setState("stopped");
  };

  // コンポーネントのクリーンアップ
  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, []);

  // 状態表示用のテキスト
  const getStateText = (): string => {
    switch (state) {
      case "waiting":
        return "待機中";
      case "countdown":
        return `カウントダウン: ${countdownValue}`;
      case "running":
        return "レッスン中";
      case "finished":
        return "終了";
      case "stopped":
        return "停止しました";
    }
  };

  // 進捗率を計算（目標勾配効果）
  const progressPercent =
    ((menu.durationSec - remainingSec) / menu.durationSec) * 100;

  // Hydration対策：マウント前は何も表示しない
  if (!isMounted) {
    return <div className="lesson-player" />;
  }

  return (
    <div className="lesson-player">
      {/* 初回ガイド（プログレッシブディスクロージャー） */}
      {isMounted && isFirstVisit && showGuide && state === "waiting" && (
        <div className="guide-tooltip">
          <div className="guide-tooltip-content">
            <strong>使い方:</strong>{" "}
            まず「音テスト」で音を確認。準備ができたら「Start」を押してレッスン開始！
            <button
              onClick={dismissGuide}
              style={{
                marginLeft: "12px",
                padding: "4px 12px",
                backgroundColor: "rgba(255,255,255,0.3)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                color: "white",
                fontSize: "12px",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* YouTube動画埋め込み */}
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${menu.youtubeVideoId}`}
          title={menu.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* クレジット表記 */}
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#7f8c8d",
          marginBottom: "16px",
        }}
      >
        引用元：
        <a
          href="https://www.youtube.com/@reikenkai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#667eea", textDecoration: "none" }}
        >
          令剣会
        </a>
      </div>

      {/* カウントダウン表示 */}
      {state === "countdown" && (
        <div className="countdown-circle">
          <span className="countdown-number">{countdownValue}</span>
        </div>
      )}

      {/* 完了時のお祝い（ユーザーデライト） */}
      {state === "finished" && (
        <div className="celebration">
          <div className="celebration-icon">🎉</div>
          <h2>レッスン完了！</h2>
          <p>お疲れ様でした！</p>
          <div className="celebration-stats">
            <div className="stat-item">
              <span className="stat-value">{clapCount}</span>
              <span className="stat-label">回反応</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{menu.durationSec}</span>
              <span className="stat-label">秒完走</span>
            </div>
          </div>
        </div>
      )}

      {/* レッスン中の表示 */}
      {state === "running" && (
        <>
          {/* 進捗バー（目標勾配効果） */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* クラップインジケーター（フィードバックループ） */}
          <div className={`clap-indicator ${showClap ? "pulse" : ""}`}>👏</div>

          {/* 残り時間（視覚的階層） */}
          <div className="status-large">{remainingSec.toFixed(1)}秒</div>

          {/* 統計カード（ゲーミフィケーション） */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="value">{clapCount}</span>
              <span className="label">反応回数</span>
            </div>
            <div className="stat-card">
              <span className="value">
                {(nextInterval / 1000).toFixed(1)}秒
              </span>
              <span className="label">次の間隔</span>
            </div>
            <div className="stat-card">
              <span className="value">{progressPercent.toFixed(0)}%</span>
              <span className="label">進捗</span>
            </div>
          </div>
        </>
      )}

      {/* 待機中・停止時の表示 */}
      {(state === "waiting" || state === "stopped") && (
        <>
          <div className={`status-state ${state}`}>{getStateText()}</div>

          {/* ステータスパネル */}
          <div className="status-panel">
            <div className="status-row">
              <span className="status-label">レッスン時間:</span>
              <span className="status-value">{menu.durationSec}秒</span>
            </div>
            {state === "stopped" && (
              <div className="status-row">
                <span className="status-label">鳴った回数:</span>
                <span className="status-value">{clapCount}回</span>
              </div>
            )}
          </div>
        </>
      )}

      {/* コントロールボタン */}
      <div className="controls">
        <button
          className="btn btn-secondary"
          onClick={handleTestClap}
          disabled={state === "running" || state === "countdown"}
        >
          🔊 音テスト
        </button>
        <button
          className="btn btn-primary"
          onClick={handleStart}
          disabled={state === "running" || state === "countdown"}
        >
          ▶️ Start
        </button>
        <button
          className="btn btn-danger"
          onClick={handleStop}
          disabled={
            state === "waiting" || state === "finished" || state === "stopped"
          }
        >
          ⏹️ Stop
        </button>
      </div>

      {/* メニュー説明 */}
      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#f8f9fa",
          borderRadius: "6px",
        }}
      >
        <h3
          style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "bold" }}
        >
          💪 意識するポイント:
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          {menu.description}
        </p>
      </div>
    </div>
  );
}
