import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("../src/pages/login"));
const MagicLinkLogin = lazy(() => import("../src/pages/magicLinkLogin"));
const Register = lazy(() => import("../src/pages/Register"));
const MagicLinkRegister = lazy(() => import("../src/pages/magicLinkRegister"));
const ChangeEmail = lazy(() => import("../src/pages/changeEmail"));
const Dashboard = lazy(() => import("../src/pages/dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/magic_link_login" element={<MagicLinkLogin />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/auth/magic_link_register"
          element={<MagicLinkRegister />}
        />
        <Route path="/auth/change_email" element={<ChangeEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
