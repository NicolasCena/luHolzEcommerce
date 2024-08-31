import { FirebaseError } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSingOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const navigate = useNavigate();

  const signOut = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      await signOut(auth)
      navigate('/sign-in')
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    signOut,
    isLoadingSignOut: loading,
    errorSignOut: error,
  };
};
