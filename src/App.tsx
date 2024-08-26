import "../src/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./routes/RoutesRoute/AppRoutes";
import Header from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="ecommerce-content">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </Provider>
    </>
  );
};
