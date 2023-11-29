import { ReactNode } from "react";
import Sideber from "./Sideber";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sideber />
      <div
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#1580A30D",
          borderBottomLeftRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
