import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useCheckRol } from "./useCheckRol";

export const useSignInGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const { consultUserBBDD } = useCheckRol();

  const getUserGoogle = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result: UserCredential = await signInWithPopup(auth, provider);
      consultUserBBDD(result);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    getUserGoogle,
    isLoadingGetUserGoogle: loading,
    errorGetUserGoogle: error,
  };
};
