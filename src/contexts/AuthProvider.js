import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState(
    () => window.localStorage.getItem('token')
  );

  return (
    <AuthContext.Provider value={{jwt , setJwt}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;