import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useSignInGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  const getUserGoogle = async () => {
    setLoading(true);

    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        setResponse(user);
        console.log(user, 'user')
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("errorCode", errorCode, 'errorMessage', errorMessage)
        setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getUserGoogle,
    isLoadingGetUserGoogle: loading,
    errorGetUserGoogle: error,
    statusGetUserGoogle: response,
  };
};
