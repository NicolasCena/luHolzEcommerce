import { Route, Routes } from "react-router-dom";
import {
  Home,
  // AdminProducts,
  MyAccount,
  NotFound,
  SignIn,
  UploadProducts,
  Shop,
  TemplateProduct
} from "../index";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {

  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/carrito" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/template-product" element={<TemplateProduct />} />

        {/* <Route
          path="/admin-products"
          element={
            <ProtectedRoute element={<AdminProducts />} adminOnly={true} />
          }
        />   */}
        <Route
          path="/upload-products"
          element={
            <ProtectedRoute element={<UploadProducts />} adminOnly={true} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export { AppRoutes }; 
