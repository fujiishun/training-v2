import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../components/user/UserList";
import Top from "../components/common/Top";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/Hoge" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
