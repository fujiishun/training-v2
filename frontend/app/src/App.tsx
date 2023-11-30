import { createContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { Route } from "react-router-dom";

import { RouterConfig } from "./route/Route";
import { getCurrentUser } from "../src/api/common/Auth";
// import Top from "./components/common/Top";

// Add this somewhere else in your app
interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser?: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

// Now, use can use it in the createContext call
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  // const Private = ({ children }: { children: any }) => {
  //   if (!loading) {
  //     if (isSignedIn) {
  //       return children;
  //     } else {
  //       // return <Navigate to="SignIn" />;
  //     }
  //   } else {
  //     return <></>;
  //   }
  // };
  return (
    <div>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        {/* <Private>
          <Route path="/" element={<Top />} />
        </Private> */}
        <RouterConfig />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
