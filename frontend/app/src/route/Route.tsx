import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createContext } from "react";

import Header from "../components/common/layout/Header";
import AppLayout from "../components/common/layout/AppLayout";
import UserList from "../components/user/UserList";
import { SignIn } from "../components/common/login/SignIn";
import { SignUp } from "../components/common/login/SignUp";
import Top from "../components/common/Top";

// export const AuthContext = createContext();

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/UserList"
          element={
            <AppLayout>
              <UserList />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
