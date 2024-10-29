import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("../src/pages/login"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
