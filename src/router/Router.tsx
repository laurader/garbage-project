import { Routes, Route } from "react-router-dom";
import RegistrationFormPage from "../pages/registration-formpage/registration-form.page";
import LoginFormPage from "../pages/login-form.page/login-form.page";
import QuoteFormPage from "../pages/quote-form.page/quote-form.page";

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<p>Pagina non trovata</p>} />
      <Route path='/login' element={<LoginFormPage />} />
      <Route path='/registration' element={<RegistrationFormPage />} />
      <Route path='/quote' element={<QuoteFormPage />} />
    </Routes>
  );
};

export default Router;
