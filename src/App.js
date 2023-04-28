import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/home_page.jsx'
import AboutPage from './Pages/about_page.jsx'
import SignupPage from './Pages/signup_page.jsx'
import LoginPage from './Pages/login_page.jsx'
import DefaultPage from './Pages/default_page.jsx'
import ContactPage from './Pages/contact_page.jsx'
import BookingsPage from './Pages/bookings_page.jsx'
import ProfilePage from './Pages/profile_page.jsx'
import AdminPage from './Pages/admin_page.jsx'
import GroundPage from './Pages/ground_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={< HomePage />} />
        <Route path="/admin" exact element={< AdminPage />} />
        <Route path="/login" exact element={< LoginPage />} />
        <Route path="/signup" exact element={< SignupPage />} />
        <Route path="/profile" exact element={< ProfilePage />} />
        <Route path="cities/:id/grounds" exact element={< GroundPage />} />
        <Route path="/bookings" exact element={< BookingsPage />} />
        <Route path="/about" exact element={< AboutPage />} />
        <Route path="/contact" exact element={< ContactPage />} />
        <Route path="/default" exact element={< DefaultPage />} />
        <Route path="*" exact element={"404 Page Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
