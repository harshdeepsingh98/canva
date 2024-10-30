import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("../src/pages/login"));
const MagicLinkLogin = lazy(() => import("../src/pages/magicLinkLogin"));
const Register = lazy(() => import("../src/pages/Register"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/magic_link_login" element={<MagicLinkLogin />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
