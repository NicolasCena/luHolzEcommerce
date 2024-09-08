import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";

export const useSingOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const signOut = async () => {
    setLoading(true);

    try {
      await signOut();
      dispatch({
        type: "SET_USER",
        value: {
          name: "",
          admin: false,
          photo: "",
          email: "",
          isAuthenticated: false,
        },
      });
      navigate("/sign-in");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
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
