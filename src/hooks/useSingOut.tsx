import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";
import { getAuth, signOut } from "firebase/auth";

export const useSingOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logOut = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      await signOut(auth);      
      
      dispatch({
        type: "SET_USER",
        value: {
          name: "",
          admin: false,
          photo: "",
          email: "",
          isAuthenticated: false,
          isVerifiedEmail: false,
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
    logOut,
    isLoadingSignOut: loading,
    errorSignOut: error,
  };
};
