import { Provider } from "react-redux";
import { MainPage } from "./pages/Main/MainPage";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};
