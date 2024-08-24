import { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, get } from "firebase/database";
import { ErrorDetails } from "firebase/vertexai-preview";

export const useGetProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorDetails | null>(null);
  const [response, setResponse] = useState([]);

  const sendProduct = async () => {
    setLoading(true);

    try {
      const db = getDatabase(app);
      const productsRef = ref(db, "products");
      const snapshot = await get(productsRef);

      if (snapshot.exists()) {
        setResponse(snapshot.val());
      };
      
    } catch (err) {
      const firebaseError = err as ErrorDetails;
      setError({
        message: firebaseError.reason,
      });
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
