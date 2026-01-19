import React from "react";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import UrlForm from "./components/UrlForm";
import Dashbord from "./components/Dashbord";
import UrlFormPage from "./pages/UrlFormPage";
import NotFound from "./pages/NotFoundPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<UrlFormPage/>} />
          <Route path="/auth" element={<AuthPage />}>
            <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signUp" element={<RegisterForm />} />
          </Route>

          <Route path="/dashboard" element={<Dashbord />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default App;
