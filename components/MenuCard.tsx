import Link from "next/link";
import { Menu, categoryIcons } from "@/lib/menus";

interface MenuCardProps {
  menu: Menu;
}

// メニューごとのアイコン（視覚的階層）
const getMenuIcon = (category: string, id: string): string => {
  // カテゴリ別のバリエーションアイコン
  const categoryVariations: Record<string, string[]> = {
    基礎練習: ["📖", "📝", "🎯", "⚔️", "🛡️", "🏃", "📐", "🔰", "⚡"],
    足打ち練習: ["🦵", "👟"],
    小手練習: ["✋", "👊", "🤜"],
    フェイント練習: ["🎭", "🎪", "🔄", "💫", "✨", "🌀", "💨"],
    連打練習: ["⚡", "💥", "🔥"],
  };

  const variations = categoryVariations[category] || ["🥋"];
  const index = parseInt(id.split("-")[1] || "1", 10) - 1;
  return variations[index % variations.length];
};

export default function MenuCard({ menu }: MenuCardProps) {
  return (
    <Link href={`/menu/${menu.id}`}>
      <div className="menu-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "8px",
          }}
        >
          <h2 style={{ margin: 0, flex: 1 }}>
            <span className="menu-card-icon">
              {getMenuIcon(menu.category, menu.id)}
            </span>
            {menu.title}
          </h2>
        </div>
        <div className="description">{menu.description}</div>
      </div>
    </Link>
  );
}
