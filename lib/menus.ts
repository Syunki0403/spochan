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
    id: "basic-1",
    title: "すり足",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "G2YRWWXBiPk",
    description: "4方向のすり足移動。姿勢を崩さず、移動の質を上げる。",
  },
  {
    id: "basic-2",
    title: "ステップ",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "ZrlDTjbau1I",
    description: "線を使ったステップ練習。リズムと重心移動を安定させる。",
  },
  {
    id: "basic-3",
    title: "足の股割り（ストレッチ）",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "ndVZz6Icj34",
    description: "ゆっくり伸ばして怪我リスクを下げる。可動域を確保。",
  },
  {
    id: "basic-4",
    title: "抑え面の飛び込み",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "qbIXwU8S3U0",
    description: "構えから剣を倒す動きで入りを作る。抑え面の導入を固める。",
  },
  {
    id: "basic-5",
    title: "足引き面（カウンター基礎）",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "Wh8uP4bCXFA",
    description: "引きながら面。バランスを崩さず返す動作の土台づくり。",
  },
  {
    id: "basic-6",
    title: "しゃがみ避け",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "gVv7U25xS_0",
    description: "しゃがみ足でよく使う回避パターン。低い姿勢の安定。",
  },
  {
    id: "basic-7",
    title: "1足の距離を伸ばした打ち（掬い打ち）",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "UJpfjK0Wf84",
    description: "踏み込み方・距離の取り方で届く距離を伸ばす。間合い強化。",
  },
  {
    id: "basic-8",
    title: "1足のガード",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "BnLHoSrbces",
    description: "音＝相手の攻撃合図。受けの形を素早く作り、姿勢を崩さない。",
  },
  {
    id: "basic-9",
    title: "抑え面からのカウンター",
    category: "基礎練習",
    durationSec: 90,
    youtubeVideoId: "aMjIN69v8PA",
    description: "受けた直後に返す。『守ってから返す』ではなく『受け→即返し』。",
  },

  // =========================
  // 足打ち練習
  // =========================
  {
    id: "foot-1",
    title: "扇足の交互打ち",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "CAAamLpajuk",
    description: "テンポ良く交互に足。上体がのけぞらないよう注意。",
  },
  {
    id: "foot-2",
    title: "面足1足ver.の交互打ち（1足踏み込み）",
    category: "足打ち練習",
    durationSec: 90,
    youtubeVideoId: "UXuJ13Hh-Vw",
    description: "面で踏み込んで足へ。上半身だけ倒すイメージで連動させる。",
  },

  // =========================
  // フェイント練習
  // =========================
  {
    id: "feint-1",
    title: "抑え面フェイントからの扇小手",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "xbbHDQHlXEI",
    description: "抑え面に見せて小手へ。相手にガードさせて打点を変える。",
  },
  {
    id: "feint-2",
    title: "下フェイントからの扇面",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "03EGtaeRQUQ",
    description: "下に誘導して扇面。目線誘導も意識。",
  },
  {
    id: "feint-3",
    title: "下上足打ち",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "labikQ69Xqo",
    description: "足へのフェイントから別打点へ。大きく動かず手元で変える。",
  },
  {
    id: "feint-4",
    title: "面突きからの扇足",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "7bSe-WSji_o",
    description: "面突きで相手の動きを止めてから足へ。",
  },
  {
    id: "feint-5",
    title: "左フェイントからの掬い面",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "8ywe33uW39w",
    description: "左右フェイントから掬い面へ。体の動きと剣の動きを合わせる。",
  },
  {
    id: "feint-6",
    title: "扇面フェイントからの掬い面",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "W_OnJ2bNdeE",
    description: "扇面に見せて打点を変える。フェイントは小さく。",
  },
  {
    id: "feint-7",
    title: "踏み込み後に軌道を変える",
    category: "フェイント練習",
    durationSec: 90,
    youtubeVideoId: "WpwR_DtvjVg",
    description: "踏み込みは同じで、打ち筋（軌道）だけ変える反射神経系。",
  },

  // =========================
  // 連打練習
  // =========================
  {
    id: "renda-1",
    title: "一足の連打（面足バージョン）",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "sn9BXkUY1Ok",
    description: "面足の連打。テンポを上げても姿勢が崩れない範囲で反復。",
  },
  {
    id: "renda-2",
    title: "打ち込みダッシュ（扇打ち）",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "gErDb4xD3XQ",
    description: "前進しながら打ち込み。連続動作の速度と姿勢維持。",
  },
  {
    id: "renda-3",
    title: "下フェイント→扇面→掬い足（フェイント兼・連打）",
    category: "連打練習",
    durationSec: 90,
    youtubeVideoId: "7yWjbT61TvI",
    description: "複合技を連続でつなぐ。動作を切らさず繋げる練習。",
  },

  // =========================
  // 小手練習
  // =========================
  {
    id: "kote-1",
    title: "出小手をやろう！",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "jIdsf_YlSP0",
    description: "出小手の反復。精度を上げるために形を固める。",
  },
  {
    id: "kote-2",
    title: "音の鳴りやすい打ち方とは？（小手）",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "XHRVkihR6RA",
    description: "小手の当て方の工夫。『当たる』から『狙って当てる』へ。",
  },
  {
    id: "kote-3",
    title: "小手引き面",
    category: "小手練習",
    durationSec: 90,
    youtubeVideoId: "jWUnjvlPHx8",
    description: "小手を避けながらカウンターで面へ。応用が効く連動技。",
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
