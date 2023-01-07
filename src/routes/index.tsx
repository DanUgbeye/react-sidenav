import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.component";
import SecondaryLayout from "../layouts/secondary.layout";

// pages imports
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ProfilePage from "../pages/profile";
import SettingsPage from "../pages/settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<>Login</>} />
          <Route path="/signup" element={<>Signup</>} />

          <Route
            element={
              <ProtectedRoute>
                <SecondaryLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
