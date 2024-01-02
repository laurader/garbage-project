import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/app.store";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

// function App() {
//   return (
//     <Provider store={store}>
//       <RegistrationFormPage />
//     </Provider>
//   );
// }

// export default App;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
