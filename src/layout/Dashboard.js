import React from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage"
import İndex from "../pages/Signin/İndex"
import { Route, Routes } from "react-router-dom";
import CandidateProfile from "../pages/Profile/CandidateProfile"

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/anasayfa" element={<HomePage />} />
        <Route exact path="/aday/giris" element={<LoginPage />} />
        <Route exact path="/aday/uyeol" element={<İndex />} />
        <Route exact path="/aday/profile" element={<CandidateProfile />} />
      </Routes>
    </div>
  );
}
