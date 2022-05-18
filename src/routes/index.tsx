import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
