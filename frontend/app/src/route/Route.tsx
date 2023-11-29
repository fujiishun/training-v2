import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hoge from "../components/user/Hoge";
import Top from "../components/common/Top";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/Hoge" element={<Hoge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
