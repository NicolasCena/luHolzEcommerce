import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useCheckRol } from "./useCheckRol";
import { useNavigate } from "react-router-dom";

interface ExtendedUserCredential extends UserCredential {
  _tokenResponse?: {
    isNewUser: boolean;
  };
}

export const useSignInGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const { consultUserBBDD } = useCheckRol();
  const navigate = useNavigate();

  const getUserGoogle = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result: ExtendedUserCredential = await signInWithPopup(
        auth,
        provider
      );
      const isNewUser = result?._tokenResponse?.isNewUser || false;
      await consultUserBBDD({ add: isNewUser, user: result?.user, media: 1 });
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
    getUserGoogle,
    isLoadingGetUserGoogle: loading,
    errorGetUserGoogle: error,
  };
};
