import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Volunteer from './components/Volunteer/Volunteer'
import Login from './components/Authentication/Login'
import NoMatch from './components/NoMatch/NoMatch'
import Header from './components/Header/Header'
import AuthProvider from './components/context/AuthProvider/AuthProvider'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/volunteer/:id" element={<Volunteer />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
