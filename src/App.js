import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignInPage from "./pages/signin";

function App() {
  return (
    <div>
      <h1>Welcome to faceBruh</h1>
      <Routes>
        <Route path="/user" element={<Navigate to="/user/login" />} />
        <Route path="user/login" element={<LoginPage />} />
        <Route path="user/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
