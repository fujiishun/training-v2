import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../../../api/common/Auth";
import Modal from "../Modal";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const confirmSuccessUrl = "http://localhost:3000/SignIn";
  const [errorMessage, setErrorMessage] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const generateParams = () => {
    const signUpParams = {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      confirm_success_url: confirmSuccessUrl,
    };
    return signUpParams;
  };

  const validateForm = () => {
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage("メールアドレスの形式が間違っています。");
      return false;
    } else if (!passwordPattern.test(password)) {
      setErrorMessage(
        "パスワードは最低8文字で、大文字、小文字、数字を含む必要があります。"
      );
      return false;
    } else if (password !== passwordConfirmation) {
      setErrorMessage("パスワードが一致しません。");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  function closeModalAndNavigate() {
    setModalOpen(false);
    navigate("/SignIn");
  }

  const handleSignUpSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const params = generateParams();
    try {
      const res = await signUp(params);
      console.log(res);
      setModalOpen(true);
    } catch (e) {
      alert("登録に失敗しました。入力情報をご確認ください。");
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
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
          {isModalOpen && (
            <Modal onClose={closeModalAndNavigate}>
              <p>仮登録に成功しました！</p>
              <p style={{ padding: "20px" }}>
                メールアドレスから本登録をお願いいたします。
              </p>
            </Modal>
          )}
          <br />
          <div>
            <Link to="/SignIn">ログインページへ</Link>
          </div>
        </form>
      </div>
    </>
  );
};
