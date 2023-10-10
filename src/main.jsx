import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/MainPage";

import "./index.scss";
import { ThemeProvider } from "./contexts/Theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
