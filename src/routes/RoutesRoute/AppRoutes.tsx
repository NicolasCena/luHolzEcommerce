import { Route, Routes } from "react-router-dom";
import {
  Home,
  AdminProducts,
  MyAccount,
  NotFound,
  SignIn,
  UploadProducts,
  Shop,
  TemplateProduct,
} from "../index";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

const AppRoutes = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/carrito" element={<Shop />} />
        <Route path="/template-product" element={<TemplateProduct />} />
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export { AppRoutes };
