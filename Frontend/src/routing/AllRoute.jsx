
import { Routes ,Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashbord from "../components/Dashbord";
import AuthPage from "../pages/AuthPage";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import NotFound from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import UrlFormPage from "../pages/UrlFormPage";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<UrlFormPage />} />

        {/*  PROTECTED ROUTE */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* AUTH ROUTES */}
      <Route path="/auth" element={<AuthPage />}>
        <Route index element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signUp" element={<RegisterForm />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoute
;
