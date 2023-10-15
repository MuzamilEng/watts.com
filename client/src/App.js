import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './app/pages/Home'
import UserForm from './app/Component/UserForm'
import Login from './app/pages/Login'
import SignUp from './app/pages/SignUp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<UserForm />} />
      <Route path='/add' element={<UserForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App