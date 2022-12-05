import React from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage"
import İndex from "../pages/Signin/İndex"
import { Route, Routes } from "react-router-dom";
import JobSearch from "../pages/JobSearch/JobSearch";
import ProfilePage from "./ProfilePage";
import JobDetail from "../pages/JobSearch/JobDetail";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/anasayfa" element={<HomePage />} />
        <Route exact path="/aday/giris" element={<LoginPage />} />
        <Route exact path="/aday/uyeol" element={<İndex />} />
        <Route exact path="/aday/profile" element={<ProfilePage />} />
        <Route exact path="/jobs/search" element={<JobSearch/>}/>
        <Route  path="/ilan/:campanyName" element={<JobDetail/>}/>
      </Routes>
    </div>
  );
}
