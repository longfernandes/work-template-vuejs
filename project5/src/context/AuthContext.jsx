import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);

  // lấy user từ localStorage khi load lại trang
  useEffect(() => {
    const savedUser = localStorage.getItem("users");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // đăng nhập
  const login = (userData) => {
    const savedUser = localStorage.getItem("users");
    if (!savedUser) {
      alert("No user found. Please sign up first!");
      return;
    }

    const parsedUser = JSON.parse(savedUser);

    if (
      userData.email === parsedUser.email &&
      userData.password === parsedUser.password
    ) {
      setUser(parsedUser);
      localStorage.setItem("users", JSON.stringify(parsedUser));
    } else {
      alert("Email or password is incorrect!");
    }
  };

  // đăng ký
  const signup = (userData) => {
    localStorage.setItem("users", JSON.stringify(userData));
    setUser(userData);
  };

  // đăng xuất
  const logout = () => {
    setUser(null);
    localStorage.removeItem("users");
  };

  return (
    <AuthContext.Provider value={{ users, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
