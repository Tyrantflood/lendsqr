import { Routes, Route } from "react-router-dom";
import Login from "./app/LoginPage";
import DashboardLayout from "./layout/DashboardLayout";
import UserDetail from "./app/users/UserDetail";
import Users from "./app/users/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
