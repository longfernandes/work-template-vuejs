import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import EmailPage from './pages/EmailPage'
import VerifyPage from './pages/VerifyPage'
import SignupPage from './pages/SignupPage'
import ProductListPage from './pages/ProductListPage'
import ProfilePage from './pages/ProfilePage'
import PasswordPage from './pages/PasswordPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <MainLayout />
      }>
        <Route index element={<HomePage />} />
        <Route path='/signin' element={<SigninPage/>} />;
        <Route path='/email' element={<EmailPage/>} />;
        <Route path='/verify' element={<VerifyPage/>} />;
        <Route path='/signup' element={<SignupPage />} />;
        <Route path='/list' element={<ProductListPage />} />;
        <Route path='/profile' element={<ProfilePage />} />;
        <Route path='/change-password' element={<PasswordPage />} /> 
      </Route>

    </Routes>
  )
}

export default App
