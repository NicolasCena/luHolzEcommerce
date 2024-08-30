import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Props = {
    email: string;
    password: string;
};

export const useSignInStandar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const getUser = async ({ email, password}: Props) => {
    setLoading(true);

    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        setResponse(user);
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
