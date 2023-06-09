import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import HomePage from './Pages/home_page.jsx';
import AboutPage from './Pages/about_page.jsx';
import SignupPage from './Pages/signup_page.jsx';
import LoginPage from './Pages/login_page.jsx';
import DefaultPage from './Pages/default_page.jsx';
import ContactPage from './Pages/contact_page.jsx';
import BookingPage from './Pages/booking_page';
import BookingsPage from './Pages/bookings_page.jsx';
import ProfilePage from './Pages/profile_page.jsx';
import AdminPage from './Pages/admin_page.jsx';
import AllGroundsPage from './Pages/all_ground_page';
import GroundPage from './Pages/ground_page';
import PaymentsPage from './Pages/payment_page';
import ManagerPage from './Pages/incharge_page.jsx'

export const AppContext = createContext();

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role) {
      setUserRole(role);
    }
  })

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ userRole, setUserRole }}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/payment" exact element={<PaymentsPage />} />
            <Route path="/profile" exact element={<ProfilePage />} />
            <Route path="/admin" exact element={userRole === "admin" ? <AdminPage /> : <DefaultPage />} />
            <Route path="/manager" exact element={userRole === "manager" ? <ManagerPage /> : <DefaultPage />} />
            {/* <Route path="/admin" exact element={<AdminPage />} /> */}
          </Route>

          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="cities/:cityId/all-grounds" exact element={<AllGroundsPage />} />
          <Route path="cities/:cityId/all-grounds/:groundId" exact element={<GroundPage />} />
          <Route path="/booking" exact element={<BookingPage />} />
          <Route path="/bookings" exact element={<BookingsPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/401" exact element={<DefaultPage />} />
          <Route path="/404" exact element={"404 Page Not Found"} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
