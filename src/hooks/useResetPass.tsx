import { FirebaseError } from "firebase/app";
import { getAuth, updatePassword,  } from "firebase/auth";
import { useState } from "react";

export const useResetPass = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const resetPassProfile = async (pass: string) => {
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const newPassword = pass;

      if(user){
        await updatePassword(user, newPassword);
      };

    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassProfile,
    isLoadingResetPass: loading,
    errorResetPass: error,
  };
};
