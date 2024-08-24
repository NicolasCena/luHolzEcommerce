import { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

interface Product {
  name: string;
  description: string;
  isNew: boolean;
  price: number;
  images: File[];
}

export const useSaveProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const sendProduct = async (product: Product) => {
    setLoading(true);

    try {
      const db = getDatabase(app);
      const storage = getStorage(app);
      const imageUrls: string[] = [];

      // Subir imágenes y obtener URLs
      for (const file of product.images) {
        const imageRef = storageRef(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        imageUrls.push(url);
      }

      // Guardar el producto con las URLs de las imágenes
      const newDocRef = push(ref(db, "products"));
      await set(newDocRef, {
        name: product.name,
        description: product.description,
        isNew: product.isNew,
        price: product.price,
        images: imageUrls,
      });

      setResponse(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    };
  };

  return {
    sendProduct,
    isLoadingSendProduct: loading,
    errorSendProduct: error,
    responseSendProduct: response,
  };
};
