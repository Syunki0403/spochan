export type MenuCategory =
  | "基礎練習"
  | "足打ち練習"
  | "小手練習"
  | "フェイント練習"
  | "連打練習";

export interface Menu {
  id: string;
  title: string;
  category: MenuCategory;
  durationSec: number;
  youtubeVideoId: string;
  description: string;
}

export const menus: Menu[] = [
  // =========================
  // 基礎練習
  // =========================
  {
    id: "basic-001",
    title: "1足のガード",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "BnLHoSrbces",
    description: "音を合図に素早くガードの形を作る。姿勢を崩さず受ける基本。",
  },
  {
    id: "basic-002",
    title: "1足の距離を伸ばした打ち(掬い打ち)",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "UJpfjK0Wf84",
    description: "踏み込みと体重移動で届く距離を伸ばす。間合いの感覚を養う。",
  },
  {
    id: "basic-003",
    title: "しゃがみ足",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "MeEfCjg8JxA",
    description: "低い姿勢から足を打つ基本動作。バランスを保ちながら素早く。",
  },
  {
    id: "basic-004",
    title: "しゃがみ足・足ひき面混合ver.",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "xoxnfMJwSLo",
    description:
      "しゃがみ足と足引き面を組み合わせた複合練習。切り替えの速さを意識。",
  },
  {
    id: "basic-005",
    title: "しゃがみ避け",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "gVv7U25xS_0",
    description: "しゃがんで攻撃を避ける動作。低い姿勢の安定感を身につける。",
  },
  {
    id: "basic-006",
    title: "すり足",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "G2YRWWXBiPk",
    description: "4方向への基本移動。姿勢を崩さず滑らかに動く土台作り。",
  },
  {
    id: "basic-007",
    title: "ガードしながら前に詰める！",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "qaB1hl1EOf4",
    description: "守りの姿勢を保ちながら間合いを詰める。攻防一体の動きを習得。",
  },
  {
    id: "basic-008",
    title: "スウェー避け",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "doDa1hr8t8I",
    description: "上体を反らして攻撃を避ける。体幹を使った回避動作の基本。",
  },
  {
    id: "basic-009",
    title: "ステップ",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "ZrlDTjbau1I",
    description:
      "リズミカルなステップワーク。重心移動と足運びの安定性を高める。",
  },
  {
    id: "basic-010",
    title: "ステップ練　円ver.",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "6HedPdum9m0",
    description: "円を描くようにステップ。横方向の動きと角度調整を練習。",
  },
  {
    id: "basic-011",
    title: "ス・ポ・ラの楯を使った文字打ち",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "an9wtUb4wWg",
    description:
      "楯を的に文字を描くように打つ。打点の正確性とコントロール向上。",
  },
  {
    id: "basic-012",
    title: "円のステップ　ツーステver.",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "nnirbvo-O4s",
    description:
      "2ステップで円を描く動き。より大きな移動距離での安定性を養う。",
  },
  {
    id: "basic-013",
    title: "出技対策①",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "ujr7xMcPcFA",
    description: "相手の出技に対応する基本パターン。読みと反応速度を鍛える。",
  },
  {
    id: "basic-014",
    title: "出技対策②",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "wkREau2KH5Q",
    description: "出技対策の応用編。複数の対応パターンを身につける。",
  },
  {
    id: "basic-015",
    title: "前後の3ステップ",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "JJ3pLcdATXs",
    description:
      "前後3歩のステップワーク。間合いの出入りをスムーズに行う練習。",
  },
  {
    id: "basic-016",
    title: "扇足からのカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "gLMFDsQaFz0",
    description: "扇足で避けてから反撃。守りから攻めへの転換を素早く。",
  },
  {
    id: "basic-017",
    title: "扇面からのカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "CebJgKORMdU",
    description:
      "扇面を打った後に相手の反撃を返す。攻防の流れを途切れさせない。",
  },
  {
    id: "basic-018",
    title: "扇面の飛び込み",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "Zz8plKYPhio",
    description:
      "距離を詰めながらの扇面。踏み込みと打ちのタイミングを合わせる。",
  },
  {
    id: "basic-019",
    title: "打った後のカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "SlNvNBX9l0k",
    description: "自分の攻撃後の隙を消して反撃に備える。残心からの切り返し。",
  },
  {
    id: "basic-020",
    title: "抑え面からのカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "aMjIN69v8PA",
    description: "抑え面で受けてすぐ返す。受け即返しの感覚を身につける。",
  },
  {
    id: "basic-021",
    title: "抑え面の飛び込み",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "qbIXwU8S3U0",
    description: "剣を倒す動作で入りを作る。抑え面の基本フォームを固める。",
  },
  {
    id: "basic-022",
    title: "掬い面の飛び込み",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "g_I6peWaE1c",
    description: "下からすくい上げる軌道で面を打つ。距離を伸ばした打ちの応用。",
  },
  {
    id: "basic-023",
    title: "腰引き避け",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "572bcLA9ed4",
    description: "腰を引いて攻撃を避ける。上体を残しつつ下半身で距離を作る。",
  },
  {
    id: "basic-024",
    title: "至近距離のガード",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "h4hems8iibo",
    description: "近い間合いでの防御技術。コンパクトな動きで確実に受ける。",
  },
  {
    id: "basic-025",
    title: "足の股割り",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "ndVZz6Icj34",
    description: "股関節の柔軟性を高めるストレッチ。怪我予防と可動域の確保。",
  },
  {
    id: "basic-026",
    title: "足の股割り②",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "3DkMO3k6k-0",
    description: "股割りの発展形。より深い柔軟性と安定した姿勢を目指す。",
  },
  {
    id: "basic-027",
    title: "足引き避け",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "K8T4fQGgyCI",
    description: "足を引いて攻撃を避ける。距離を取りながら体勢を保つ。",
  },
  {
    id: "basic-028",
    title: "足引き面",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "Wh8uP4bCXFA",
    description: "後退しながら面を打つカウンター技。バランスを崩さず返す動作。",
  },
  {
    id: "basic-029",
    title: "踏み込み後に軌道を変える",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "WpwR_DtvjVg",
    description:
      "踏み込みは同じで打点を変える。相手の反応を見て打ち分ける技術。",
  },
  {
    id: "basic-030",
    title: "重心をのせて打つ",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "nfAGgpRemeA",
    description: "体重を乗せた重い打ちを習得。腰から力を伝える感覚を養う。",
  },
  {
    id: "basic-031",
    title: "間合い管理",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "CYUIsuHC3fc",
    description: "適切な距離を保つ練習。近すぎず遠すぎない間合い感覚を磨く。",
  },
  {
    id: "basic-032",
    title: "１足の距離を伸ばした打ち(扇打ち)",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "C5ZSIgVHqXU",
    description: "扇打ちで距離を伸ばす。横からの軌道で届く範囲を広げる。",
  },
  {
    id: "basic-033",
    title: "２ステップその①",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "0S9NyGsD2_E",
    description: "2歩で距離を詰める基本パターン。リズムとタイミングを習得。",
  },
  {
    id: "basic-034",
    title: "２ステップその②",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "dNKVHGVLwlg",
    description: "2ステップの応用編。より速く、より正確な動きを目指す。",
  },
  {
    id: "basic-035",
    title: "足の股割り発展ver",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "Avsu7hLrHdI",
    description: "股割りストレッチの発展形。動きを加えた実践的な柔軟体操。",
  },
  {
    id: "basic-036",
    title: "一升瓶素振り",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "sVt0FQ-MIzc",
    description: "重い負荷での素振り。手首と前腕の強化、振りの安定性向上。",
  },
  {
    id: "basic-037",
    title: "バックステップからのカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "heyInEZ682Y",
    description: "後退で避けてから反撃。距離を取りつつ攻撃チャンスを作る。",
  },
  {
    id: "basic-038",
    title: "カウンター〜実践を意識した動きバージョン",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "IGLXHHua5Ms",
    description:
      "試合を想定したカウンター練習。実践的な動きとタイミングを養う。",
  },
  {
    id: "basic-039",
    title: "足避け足",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "mNFDeiWQanM",
    description: "足への攻撃を避けて足を打ち返す。下段の攻防パターン。",
  },
  {
    id: "basic-040",
    title: "間合い管理(扇面ver.)",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "7YVvl72gGv8",
    description: "扇面の間合いで距離を管理。横からの攻撃に適した距離感覚。",
  },
  {
    id: "basic-041",
    title: "打ち込みを加えた間合い管理",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "-SCBKW2KUFM",
    description: "打ち込みながら間合いを調整。攻撃中も距離感を意識する。",
  },
  {
    id: "basic-042",
    title: "打ち込みダッシュ(扇打ち)",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "gErDb4xD3XQ",
    description: "前進しながら連続で打ち込む。スピードを保ちながら姿勢を維持。",
  },
  {
    id: "basic-043",
    title: "移動しながらの打ち込み「抑え打ちver.」",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "e_s9yjZ9LRc",
    description: "移動しながら抑え打ちを連続。動きの中での打ちの安定性を養う。",
  },
  {
    id: "basic-044",
    title: "移動しながら打ち込み「掬い打ち」",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "jTPYhQyQwdo",
    description: "移動しながら掬い打ちを連続。下からの軌道を保ちながら前進。",
  },
  // =========================
  // 足打ち練習
  // =========================
  {
    id: "foot-001",
    title: "1足の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "MQk7riHLwV4",
    description: "左右交互に足を打つ基本練習。リズムと正確性を重視。",
  },
  {
    id: "foot-002",
    title: "1足の交互打ちペースup",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "YwxFAk0Bc24",
    description: "交互打ちのスピードアップ版。速さを上げても精度を保つ。",
  },
  {
    id: "foot-003",
    title: "2ステの交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "pYN7gY-Zb1M",
    description: "2ステップからの交互打ち。移動距離を増やした実践的な練習。",
  },
  {
    id: "foot-004",
    title: "反応速度を上げる！1足ver",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "rlNRCNugCD0",
    description: "合図に素早く反応して足を打つ。反射神経と判断力を鍛える。",
  },
  {
    id: "foot-005",
    title: "扇の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "fftkZOrU-7U",
    description: "扇打ちで左右交互に足を狙う。横からの軌道での正確性を高める。",
  },
  {
    id: "foot-006",
    title: "扇足の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "CAAamLpajuk",
    description: "扇足を左右交互に打つ。テンポよく上体がぶれないように注意。",
  },
  {
    id: "foot-007",
    title: "抑え面の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "RZ2EN0IpViA",
    description: "抑え面から足への連続技。上下の打ち分けをスムーズに行う。",
  },
  {
    id: "foot-008",
    title: "楯の文字打ち足打ちver.",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "fH_oifVW48A",
    description: "楯を的に足打ちで文字を描く。低い位置での打点コントロール。",
  },
  {
    id: "foot-009",
    title: "面足1足ver.の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "UXuJ13Hh-Vw",
    description: "1足で面と足を交互に打つ。上下の切り替えと連動性を養う。",
  },
  {
    id: "foot-010",
    title: "面足の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "KtNEyLfF2Co",
    description: "面から足への連続動作。スムーズな打点の移行を練習。",
  },
  {
    id: "foot-011",
    title: "面足の交互打ちツーステver.",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "8b8yVwtxGJc",
    description: "2ステップで面足を交互に打つ。移動しながらの上下打ち分け。",
  },
  {
    id: "foot-012",
    title: "左手をつく！",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "GCIjYTYwX1E",
    description: "左手を地面について深く足を打つ。より低い姿勢からの攻撃。",
  },
  {
    id: "foot-013",
    title: "左手を上げる！1cmでも遠くへ打つ！",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "2qFbzrXvmys",
    description: "左手でバランスを取りながら遠くへ。リーチを最大限に活かす。",
  },
  {
    id: "foot-014",
    title: "間合い管理(扇足ver.)",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "vbhPSRMShOQ",
    description: "扇足に適した間合いを保つ。横からの足打ちの距離感を磨く。",
  },

  // =========================
  // フェイント練習
  // =========================
  {
    id: "feint-001",
    title: "下フェイント→扇面→掬い足",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "7yWjbT61TvI",
    description: "3段階のフェイント連続技。相手を翻弄する複合パターン。",
  },
  {
    id: "feint-002",
    title: "1歩踏み込みのフェイント",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "uXktvpEbW20",
    description: "踏み込みで相手を誘い出す。足運びで攻撃を匂わせる技術。",
  },
  {
    id: "feint-003",
    title: "下フェイントからの扇面",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "03EGtaeRQUQ",
    description: "下への攻撃を見せて面へ。目線誘導で上を空ける。",
  },
  {
    id: "feint-004",
    title: "下上足打ち",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "labikQ69Xqo",
    description:
      "下から上へのフェイント後に足を打つ。手元の小さな動きで惑わす。",
  },
  {
    id: "feint-005",
    title: "左フェイントからの掬い面",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "8ywe33uW39w",
    description: "左方向への動きから掬い面。体の動きと剣の連動を意識。",
  },
  {
    id: "feint-006",
    title: "抑え面フェイントからの扇小手",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "xbbHDQHlXEI",
    description: "抑え面と見せて小手へ。相手のガードを誘って打点を変える。",
  },
  {
    id: "feint-007",
    title: "面突きからの扇足",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "7bSe-WSji_o",
    description: "面への突きで相手を止めてから足へ。上で固めて下を打つ。",
  },

  // =========================
  // 連打練習
  // =========================
  {
    id: "renda-001",
    title: "３連打　抑え掬い掬い",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "b6TGlrCi23k",
    description: "抑えから掬い2発の3連打。軌道の切り替えをスムーズに。",
  },
  {
    id: "renda-002",
    title: "扇面からの掬い足 ２ステver.",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "9X4Zb0K1l_Q",
    description: "2ステップで扇面から掬い足へ。上下の連打を距離を使って行う。",
  },
  {
    id: "renda-003",
    title: "扇面から掬い足",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "6FYRfN7GsOw",
    description: "扇面から素早く掬い足へ。上から下への流れるような連打。",
  },
  {
    id: "renda-004",
    title: "１足の足面",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "1fSAQm08cVc",
    description: "1足で足から面への連打。下から上への素早い切り替え。",
  },
  {
    id: "renda-005",
    title: "３連打　抑え扇扇",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "sc7WOl9VYbk",
    description: "抑えから扇2発の3連打。同じ軌道での連続攻撃を安定させる。",
  },
  {
    id: "renda-006",
    title: "ツーステの連打・・面足バージョン",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "mXTtwWvfeZ4",
    description: "2ステップで面と足を連打。移動距離を活かした上下の攻撃。",
  },
  {
    id: "renda-007",
    title: "一足の連打・・面足バージョン",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "sn9BXkUY1Ok",
    description: "1足で面足の連打。テンポを上げても姿勢が崩れないように。",
  },

  // =========================
  // 小手練習
  // =========================
  {
    id: "kote-001",
    title: "出小手をやろう！",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "jIdsf_YlSP0",
    description: "相手の出を狙う出小手。タイミングと打点の精度を高める。",
  },
  {
    id: "kote-002",
    title: "小手引き面",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "jWUnjvlPHx8",
    description: "小手を避けながら面へ返す。回避と反撃を一連の動作で行う。",
  },
  {
    id: "kote-003",
    title: "小手を決めるときのイメージ",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "KMnW62GQOSA",
    description: "小手の打点と当て方のイメージ。狙って当てる感覚を養う。",
  },
  {
    id: "kote-004",
    title: "小手打ちの軌道は？",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "lr4dhMrO_lM",
    description: "効果的な小手の軌道を学ぶ。最短距離で確実に当てる技術。",
  },
  {
    id: "kote-005",
    title: "音の鳴りやすい打ち方とは？",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "XHRVkihR6RA",
    description: "しっかり音が鳴る打ち方。当たるから狙って当てるへの進化。",
  },
];

export function getMenuById(id: string): Menu | undefined {
  return menus.find((menu) => menu.id === id);
}

export function getMenusByCategory(): Record<MenuCategory, Menu[]> {
  const grouped: Record<string, Menu[]> = {};

  menus.forEach((menu) => {
    if (!grouped[menu.category]) {
      grouped[menu.category] = [];
    }
    grouped[menu.category].push(menu);
  });

  return grouped as Record<MenuCategory, Menu[]>;
}

export const categoryOrder: MenuCategory[] = [
  "基礎練習",
  "足打ち練習",
  "小手練習",
  "フェイント練習",
  "連打練習",
];

// カテゴリごとのアイコン
export const categoryIcons: Record<MenuCategory, string> = {
  基礎練習: "📚",
  足打ち練習: "🦵",
  小手練習: "✋",
  フェイント練習: "🎭",
  連打練習: "⚡",
};
