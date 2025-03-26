
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import DashBoard from './pages/DashBoard';


type Props = {
  children : ReactNode
};

const ProtectedRoute  = ({children} : Props) => {
  const {userId, userName } = useSelector(state => state.user);
  console.log(userId);
  if(userId === undefined || userName === undefined) return <Navigate to="/login" />
  else return (
    <>
      {children}
    </>
  )

  
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard' element={
            <ProtectedRoute >
              <DashBoard />
            </ProtectedRoute>
          } />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
