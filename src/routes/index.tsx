import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SecondaryLayout from '../layouts/secondary.layout'
import AboutPage from '../pages/About.page'
import HomePage from '../pages/Home.page'
import ProfilePage from '../pages/Profile.page'

export default function AppRoutes() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" >
          <Route path="login" element={<>Login</>} />
          <Route path="signup" element={<>Signup</>} />

          <Route element={<SecondaryLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="profile" element={<ProfilePage />} />         
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
