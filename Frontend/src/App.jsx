import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getMe } from "./apis/user.api";
import { login, authChecked } from "./store/slice/auth.slice";
import  AllRoute from "./routing/AllRoute";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMe();
        dispatch(login(res.data));
      } catch (err) {
        dispatch(authChecked());
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
   <>
   <AllRoute/>
   </>
  );
};

export default App;
