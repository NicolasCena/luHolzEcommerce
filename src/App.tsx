import "../src/styles/index.scss";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./routes/RoutesRoute/AppRoutes";
import Header from "./components/Header/Header";
import { useAuthState } from "./hooks/SignIn/useAuthState";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  useAuthState();

  return (
    <>
      <div className="ecommerce-content">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
};
