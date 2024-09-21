import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => {
      const existingUserIndex = prevUsers.findIndex(u => u.email === user.email);
      if (existingUserIndex !== -1) {
        return prevUsers.map((u, index) => index === existingUserIndex ? user : u);
      }
      return [...prevUsers, user];
    });
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
