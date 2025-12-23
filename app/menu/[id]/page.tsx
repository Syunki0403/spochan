import Link from "next/link";
import { menus, getMenuById, categoryIcons } from "@/lib/menus";
import LessonPlayer from "@/components/LessonPlayer";

// 静的配布する場合に必要（generateStaticParams）
export async function generateStaticParams() {
  return menus.map((menu) => ({
    id: menu.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MenuPage({ params }: PageProps) {
  const { id } = await params;
  const menu = getMenuById(id);

  if (!menu) {
    return (
      <div className="container">
        <h1>メニューが見つかりません</h1>
        <Link href="/">
          <button className="btn btn-back">トップに戻る</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <div style={{ marginBottom: "8px", fontSize: "14px", opacity: 0.8 }}>
          {categoryIcons[menu.category]} {menu.category}
        </div>
        <h1>
          <span className="header-icon">🥋</span>
          {menu.title}
        </h1>
        <p style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
          {menu.durationSec}秒間のトレーニング
        </p>
      </div>
      <div className="container">
        <Link href="/" scroll={false}>
          <button className="btn btn-back">← メニュー一覧に戻る</button>
        </Link>
        <LessonPlayer menu={menu} />
      </div>
    </div>
  );
}
