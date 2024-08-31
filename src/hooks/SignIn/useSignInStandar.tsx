import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useCheckRol } from "./useCheckRol";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

type Props = {
  email: string;
  password: string;
};

export const useSignInStandar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const { consultUserBBDD } = useCheckRol();
  const navigate = useNavigate();

  interface ExtendedUserCredential extends UserCredential {
    _tokenResponse?: {
      isNewUser: boolean;
    };
  }

  const getUser = async ({ email, password }: Props) => {
    setLoading(true);

    try {
      const auth = getAuth();
      const result: ExtendedUserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const isNewUser = result?._tokenResponse?.isNewUser || false;
      await consultUserBBDD({ add: isNewUser, user: result?.user });
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
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
