import axiosInstance from "../../axiosInstance";
import Cookies from "js-cookie";

// サインアップ
export const signUp = (params: { [key: string]: unknown }) => {
  return axiosInstance.post("/auth", params);
};

// サインイン
export const signIn = (params: { [key: string]: unknown }) => {
  return axiosInstance.post("/auth/sign_in", params);
};

// サインアウト
export const signOut = () => {
  return axiosInstance.delete("/auth/sign_out", {
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

  return axiosInstance.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
