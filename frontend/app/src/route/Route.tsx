import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/common/Header";
import AppLayout from "../components/common/AppLayout";
import UserList from "../components/user/UserList";
import Top from "../components/common/Top";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
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
