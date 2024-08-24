import { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, get } from "firebase/database";

export const useGetProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const sendProduct = async () => {
    setLoading(true);

    try {
      const db = getDatabase(app);
      const productsRef = ref(db, "products");
      const snapshot = await get(productsRef);

      if (snapshot.exists()) {
        setResponse(snapshot.val());
      } else {
        setResponse([]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendProduct,
    isLoadingGetProduct: loading,
    errorGetProduct: error,
    products: response,
  };
};
