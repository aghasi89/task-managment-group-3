import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/*localStorage.clear()
const members=[{
  name:"Admin",
  email:"admin@gmail.com",
  password:"gg85"
}]
localStorage.setItem("members", JSON.stringify(members));*/


root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);