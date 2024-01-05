import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../api/common/Auth";
import Modal from "../Modal";
import { AuthContext } from "../../../App";

export const SignIn = () => {
  // @ts-ignore
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  let timerId: NodeJS.Timeout;

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  function closeModalAndNavigate() {
    clearTimeout(timerId);
    setModalOpen(false);
    navigate("/UserList");
  }

  const handleSignInSubmit = async (e: any) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        setModalOpen(true);

        timerId = setTimeout(closeModalAndNavigate, 5000);
      }
    } catch (e) {
      alert("ログインに失敗しました。入力情報をご確認ください。");
      console.log(e);
    }
  };

  return (
    <>
      <p style={{ marginLeft: "40px", fontSize: "20px", fontWeight: "700" }}>
        ログインページ
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
          <br />
          <button
            type="submit"
            onClick={(e) => handleSignInSubmit(e)}
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
            ログイン
          </button>
          <br />
          {isModalOpen && (
            <Modal onClose={closeModalAndNavigate}>
              <p>ログインに成功しました！</p>
            </Modal>
          )}
          <br />
          新規登録がまだの方は
          <Link to="/SignUp">こちら</Link>からご登録ください
        </form>
      </div>
    </>
  );
};
