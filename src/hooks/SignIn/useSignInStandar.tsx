import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useCheckRol } from "./useCheckRol";
import { FirebaseError } from "firebase/app";

type Props = {
    email: string;
    password: string;
};

export const useSignInStandar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const { consultUserBBDD } = useCheckRol();

  const getUser = async ({ email, password}: Props) => {
    setLoading(true);

    try {
        const auth = getAuth();
        const result: UserCredential = await signInWithEmailAndPassword(auth, email, password)
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
    getUser,
    isLoadingGetUser: loading,
    errorGetUser: error,
  };
};
