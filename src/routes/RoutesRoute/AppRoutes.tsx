import { Route, Routes, useParams } from "react-router-dom";
import {
  Home,
  AdminProducts,
  MyAccount,
  NotFound,
  SignIn,
  UploadProducts,
  Shop,
  Carrito
} from "../index";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";
import { useAppSelector } from "src/redux/hooks/useAppSelector";
import { RouterLayout } from "../PayRoute/RouterLayout";

const AppRoutes = () => {
  const user = useAppSelector((state) => state.user);

  function RouteWithIndex() {
    const { routeIndex } = useParams();
    
    return <RouterLayout routeIndex={routeIndex} />;
  }

  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/my-account"
          element={
            <ProtectedRoute
              element={<MyAccount />}
              condition={!user.isAuthenticated}
            />
          }
        />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/sign-in"
          element={
            <ProtectedRoute
              element={<SignIn />}
              condition={user.isAuthenticated}
            />
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedRoute
              element={<AdminProducts />}
              condition={!user.admin}
            />
          }
        />
        <Route
          path="/upload-products"
          element={
            <ProtectedRoute
              element={<UploadProducts />}
              condition={!user.admin}
            />
          }
        />
        <Route path="/pay" element={<NotFound />} />
        <Route path="/:routeIndex" element={<RouteWithIndex />} />

      </Routes>
    </div>
  );
};

export { AppRoutes };
