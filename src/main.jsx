import ReactDOM from "react-dom/client";

import "./index.scss";
import { ThemeProvider } from "./contexts/Theme";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
