import { Provider } from "react-redux";
import { MainPage } from "./pages/Main/MainPage";
import store from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/component";
import { RestaurantContainer } from "./components/Restaurant/container";
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<MainPage />}>
              <Route path=":restaurantId" element={<RestaurantContainer />} />
            </Route>
            <Route path="*" element={<div> NotFound</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
