import React, { useReducer, createContext } from "react";

//TODO search useReducer react hook

// 3:21:00
const AuthContext = createContext({
  // initialState of Context data
  user: null,
  login: (userData) => {},
  logout: () => {},
});

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload, // IF login add user data
      };
    case "LOGOUT":
      return {
        ...state,
        user: null, // IF logout clear user data
      };
    default:
      return state;
  }
};

// AuthProvider function
const AuthProvider = (props) => {
  // create a userReducer with above authReducer and  pass in a init user state data
  const [state, dispatch] = useReducer(authReducer, { user: null });

  // When trigger login function, will change AuthContext's data to type login
  function login(userData) {
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  }

  // When trigger logout function, will change AuthContext's data to type logout
  function logout() {
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
