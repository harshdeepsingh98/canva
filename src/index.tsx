import * as ReactDOM from "react-dom/client";
import App from "App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "store/store";
import "index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    // </Provider>
  );
}
