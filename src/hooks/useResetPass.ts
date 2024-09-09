import { FirebaseError } from "firebase/app";
import { getAuth, updatePassword,  } from "firebase/auth";
import { useState } from "react";

export const useResetPass = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const resetPassProfile = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const newPassword = 'prueba';

      if(user){
        const result = await updatePassword(user, newPassword);
        console.log("RESULT PASS", result)
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
