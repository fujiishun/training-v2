import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // パスがルートのときはヘッダーを非表示
  if (location.pathname === "/") {
    return null;
  }
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#1580A31A",
        marginBottom: "40px",
      }}
    >
      <Link className="navbar-brand" to="/">
        <img
          src="/starbucks.svg"
          alt=""
          className="rounded-circle me-2"
          style={{
            borderRadius: "50%",
            marginLeft: "30px",
            marginRight: "10px",
            width: "80px",
            height: "80px",
          }}
        />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://via.placeholder.com/30"
          alt="Profile"
          className="rounded-circle me-2"
          style={{
            borderRadius: "50%",
            marginRight: "10px",
            width: "40px",
            height: "40px",
          }}
        />
        <span className="me-2" style={{ marginRight: "10px" }}>
          山田 太郎
        </span>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          style={{
            marginRight: "40px",
          }}
        >
          ###
        </button>
        {showMenu && (
          <div
            style={{
              position: "absolute",
              top: 45,
              right: 5,
              border: "1px solid black",
              borderRadius: "3%",
              backgroundColor: "white",
            }}
          >
            <Link
              className="dropdown-item"
              to="/signin"
              style={{ display: "block", padding: "10px" }}
            >
              サインイン
            </Link>
            <Link
              className="dropdown-item"
              to="/"
              style={{ display: "block", padding: "10px" }}
            >
              サインアウト
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
