import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./index";
import pages from "../pages";

export default function Path() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.LANDING_PAGE()} element={<pages.LandingPage />} />
        <Route exact path={ROUTES.HOME_MHS()} element={<pages.HomeMahasiswa />} />
        <Route exact path={ROUTES.LOGIN_USER()} element={<pages.LoginUser />} />
        <Route exact path={ROUTES.REGISTER_MHS()} element={<pages.RegisterMahasiswa />} />
        <Route exact path={ROUTES.LOGIN_API()} element={<pages.LoginAPI />} />
      </Routes>
    </Router>
  );
}