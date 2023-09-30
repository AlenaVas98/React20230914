import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/MainPage";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<MainPage />);
