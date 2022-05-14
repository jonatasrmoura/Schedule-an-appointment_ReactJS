import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Schedule } from "../pages/Schedule";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Schedule />} />
    </Routes>
  )
}
