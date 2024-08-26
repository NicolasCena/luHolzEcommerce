import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useWelcomeUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const getUser = async () => {
    setLoading(true);

    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log(user, 'user')
    } catch (err) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode)
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    getUser,
    isLoadingGetUser: loading,
    errorGetUser: error,
    statusGetUser: response,
  };
};
