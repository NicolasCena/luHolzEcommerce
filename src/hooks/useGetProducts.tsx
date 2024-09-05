// import { useState } from "react";
// import { app } from "../firebase";
// import { getDatabase, ref, get } from "firebase/database";
// import { ErrorDetails } from "firebase/vertexai-preview";
// import { ProductFirebase } from "../types/Product.type";

// export const useGetProducts = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<ErrorDetails | null>(null);
//   const [response, setResponse] = useState<ProductFirebase[]>([]);

//   const getProducts = async () => {
//     setLoading(true);

//     try {
//       const db = getDatabase(app);
//       const productsRef = ref(db, "products");
//       const products = await get(productsRef);

//       if (products.exists()) {
//         const productArray: ProductFirebase[] = Object.entries(
//           products.val()
//         ).map(([, product]) => ({
//           ...(product as ProductFirebase),
//         }));
//         setResponse(productArray);
//       }
//     } catch (err) {
//       const firebaseError = err as ErrorDetails;
//       setError({
//         message: firebaseError.reason,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     getProducts,
//     isLoadingGetProduct: loading,
//     errorGetProduct: error,
//     products: response,
//   };
// };
