import { Routes, Route } from "react-router-dom";
import RegistrationFormPage from "../pages/registration-formpage/registration-form.page";
import LoginFormPage from "../pages/login-form.page/login-form.page";

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<p>Pagina non trovata</p>} />
      <Route path='/login' element={<LoginFormPage />} />
      <Route path='/registration' element={<RegistrationFormPage />} />
    </Routes>
  );
};

export default Router;
