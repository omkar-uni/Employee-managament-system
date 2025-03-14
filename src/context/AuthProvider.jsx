import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // localStorage.clear()
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if data is in localStorage, if not, set it
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      console.log("Setting local storage data...");
      setLocalStorage();
    }

    const { employees,admin} = getLocalStorage();
    // console.log("Fetched from localStorage:", { employees, admin }); // Log fetched data

    if (employees && admin) {
      setUserData(employees,admin);
    } else {
      console.log("No data found in local storage!");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
