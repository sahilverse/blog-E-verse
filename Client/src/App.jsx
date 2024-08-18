import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { NotFound } from './components/NotFound'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './contexts/AuthProvider'
import { HomeProtected } from './components/protected-home/HomeProtected'

function App() {

  const { user, isUserLoading } = useAuth();

  if (isUserLoading) {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <Router>

        <Navbar />
        <ToastContainer />

        <Routes>
          {
            user ?
              <Route path="/" element={<HomeProtected />} /> :

              <Route path="/" element={<Home />} />
          }
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
