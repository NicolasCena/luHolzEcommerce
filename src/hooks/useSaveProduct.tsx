// import { useState } from "react";
// import { app } from "../firebase";
// import { getDatabase, ref, set, push } from "firebase/database";

// interface Product {
//   name: string;
//   description: string;
//   isNew: boolean;
//   price: number;
//   images: string[];
// }

// export const useSaveProduct = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<null | unknown>(null);
//   const [response, setResponse] = useState(false);

//   const sendProduct = async (product: Product) => {
//     setLoading(true);

//     try {
//       const db = getDatabase(app);
//       const imageUrls: string[] = [];
//       const newDocRef = push(ref(db, "products"));
//       const productId = newDocRef.key;

//       await set(newDocRef, {
//         id: productId,
//         name: product.name,
//         description: product.description,
//         isNew: product.isNew,
//         price: product.price,
//         images: imageUrls,
//       });

//       setResponse(true);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     sendProduct,
//     isLoadingSendProduct: loading,
//     errorSendProduct: error,
//     responseSendProduct: response,
//   };
// };
