// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  // パスがルートのときはヘッダーを非表示
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "1000px",
        backgroundColor: "#1580A31A",
        padding: "10px",
        marginRight: "40px",
        borderBottomRightRadius: "10px", // 右下の角を丸くする
        borderTopRightRadius: "10px", // 右上の角を丸くする
      }}
    >
      <Link to="/page1" style={{ display: "block", padding: "10px" }}>
        ページ1
      </Link>
      <Link to="/page2" style={{ display: "block", padding: "10px" }}>
        ページ2
      </Link>
    </div>
  );
};

export default Sidebar;
