import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import HomePage from './pages/home'
import ContactPage from './pages/contact';

export default function App() {

  return (
    <>
      {/* routing setup */}
      <BrowserRouter>
        <Navbar /> {/* navigation bar */} {/* This component must be in BrowserRouter, because of this component have a route*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter></>
  );
}

