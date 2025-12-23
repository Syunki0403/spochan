import { getMenusByCategory, categoryOrder, categoryIcons } from "@/lib/menus";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  const menusByCategory = getMenusByCategory();

  return (
    <div>
      <div className="header">
        <h1>
          <span className="header-icon">🥋</span>
          スポチャン練習アプリ
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>
          不定期クラップ音で反応トレーニング
        </p>
        <p style={{ marginTop: "8px", fontSize: "14px", opacity: 0.85 }}>
          3〜5秒間隔のランダムな音で、実戦に近い反応速度を鍛えましょう！
        </p>
      </div>
      <div className="container">
        <div style={{ marginBottom: "16px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
            全{Object.values(menusByCategory).flat().length}メニュー / 6カテゴリ
          </p>
        </div>

        {categoryOrder.map((category) => {
          const menus = menusByCategory[category];
          if (!menus || menus.length === 0) return null;

          return (
            <div key={category} style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#2c3e50",
                }}
              >
                <span style={{ fontSize: "24px" }}>
                  {categoryIcons[category]}
                </span>
                {category}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "#7f8c8d",
                  }}
                >
                  ({menus.length}メニュー)
                </span>
              </h2>
              <div className="menu-grid">
                {menus.map((menu) => (
                  <MenuCard key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
