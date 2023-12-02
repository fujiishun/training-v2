import authInstance from "../../http/authInstance";
import Cookies from "js-cookie";

// サインアップ
export const signUp = (params: { [key: string]: unknown }) => {
  return authInstance.post("/", params, { timeout: 5000 });
};

// サインイン
export const signIn = (params: { [key: string]: unknown }) => {
  return authInstance.post("/sign_in", params);
};

// サインアウト
export const signOut = () => {
  return authInstance.delete("/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ログインユーザー取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return authInstance.get("/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
