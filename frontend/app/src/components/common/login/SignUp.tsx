import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../../api/common/Auth";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const confirmSuccessUrl = "http://localhost:3000/SignIn";

  const generateParams = () => {
    const signUpParams = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      confirm_success_url: confirmSuccessUrl,
    };
    return signUpParams;
  };

  const handleSignUpSubmit = async (e: any) => {
    e.preventDefault();
    const params = generateParams();
    try {
      const res = await signUp(params);
      console.log(res);
      alert("confirm email");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <p style={{ marginLeft: "40px", fontSize: "20px", fontWeight: "700" }}>
        新規登録ページ
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={{ textAlign: "center" }}>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password_confirmation">パスワード確認</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div>
            <input
              type="hidden"
              id="confirm_success_url"
              name="confirm_success_url"
              value={confirmSuccessUrl}
            />
            <br />
            <button
              type="submit"
              onClick={(e) => handleSignUpSubmit(e)}
              style={{
                backgroundColor: "#007BFF",
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              登録
            </button>
          </div>
          <br />
          <div>
            <Link to="/SignIn">ログインページへ</Link>
          </div>
        </form>
      </div>
    </>
  );
};
