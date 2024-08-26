import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useNewUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const newUser = async (email, password) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setResponse(user);
    } catch (err) {
      const errorCode = err?.code;
      const errorMessage = err?.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      setError({ code: errorCode, message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return {
    newUser,
    isLoadingNewUser: loading,
    errorNewUser: error,
    responseNewUser: response,
  };
};
