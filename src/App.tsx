import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/app.store";
import RegistrationFormPage from "./pages/registration-formpage/registration-form.page";

function App() {
  return (
    <Provider store={store}>
      <RegistrationFormPage />
    </Provider>
  );
}

export default App;
