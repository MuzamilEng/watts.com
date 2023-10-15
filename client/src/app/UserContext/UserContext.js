import React, { createContext, useContext, useReducer, useState } from 'react';
// const initialState = data

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const updatedUsers = state?.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
      return updatedUsers;

    case 'ADD_USER':
      return [...state, action.payload];

    case 'DELETE_USER':
      const remainingUsers = state?.filter((user) => user.id !== action.payload);
      console.log(remainingUsers, "remaining users");
      return remainingUsers || [];

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer);
  // console.log(state, "UserProvider ki statae");


  const selectUser = (user) => {
    setSelectedUser(user);
  }
  const updateUser = (id, data) => {
    dispatch({ type: 'UPDATE_USER', payload: { id, data } });
  };

  const deleteUser = (id) => {
    dispatch({ type: 'DELETE_USER', payload: { id } });
  };

  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
    console.log(state, "add user");

  }

  return (
    <UserContext.Provider value={{
      state, updateUser,
      deleteUser, addUser,
      selectUser, selectedUser
    }}
    >
      {children}
    </UserContext.Provider>
  );
};
