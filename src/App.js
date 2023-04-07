import './App.css';
import { Button, Container } from 'react-bootstrap';
import { TestCard } from './Components/Cards';
import { MUIButton } from './Components/Buttons';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/home_page.jsx'
import AboutPage from './Pages/about_page.jsx'
import SignupPage from './Pages/signup_page.jsx'
import Login from './Pages/login_page.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={< HomePage />} />
        <Route path="/login" exact element={< Login />} />
        <Route path="/signup" exact element={< SignupPage />} />
        <Route path="/about" exact element={< AboutPage />} />
        <Route path="*" exact element={"404 Page Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
