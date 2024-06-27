import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/LoginForm";
function App() {
  return (
    <div>
      <Routes>
        <Login />
      </Routes>
    </div>
  );
}

export default App;
