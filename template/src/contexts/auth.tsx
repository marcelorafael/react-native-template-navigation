import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const [dataUser, setDataUser] = useState(null);

  function handleSetUser(data: any) {
    setUser(data);
  }

  function handleGetUser() {
    return user
  }

  function handleSetDataUser(data: any) {
    setDataUser(data);
  }

  function handleGetDataUser() {
    return dataUser
  }

  return (
    <AuthContext.Provider value={{
      signed: user,
      handleSetUser,
      handleGetUser,
      dataUser,
      handleSetDataUser,
      handleGetDataUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;