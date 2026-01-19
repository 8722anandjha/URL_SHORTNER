import React, { useState } from 'react'
import LoginForm from '../components/loginForm.jsx'
import RegisterForm from '../components/registerForm.jsx'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {

    const [login, setLogin] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <Outlet/>
        </div>
    )
}

export default AuthPage