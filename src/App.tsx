import "../src/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Footer } from "./components/Footer/Footer";
// import { AppRoutes } from "./routes/RoutesRoute/AppRoutes";
import Header from "./components/Header/Header";
import { Home } from "./routes";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="ecommerce-content">
          <Header />
          <Home/>
          {/* <AppRoutes /> */}
          <Footer />
        </div>
      </Provider>
    </>
  );
};
