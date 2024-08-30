import { Route, Routes } from "react-router-dom";
import {
  Home,
  AdminProducts,
  MyAccount,
  NotFound,
  SignIn,
  UploadProducts,
  Shop,
} from "../index";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin-products"
          element={
            <ProtectedRoute element={<AdminProducts />} adminOnly={true} />
          }
        />
        <Route
          path="/upload-products"
          element={
            <ProtectedRoute element={<UploadProducts />} adminOnly={true} />
          }
        />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/upload-products" element={<UploadProducts />} />
        <Route path="/carrito" element={<Shop />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export { AppRoutes };
