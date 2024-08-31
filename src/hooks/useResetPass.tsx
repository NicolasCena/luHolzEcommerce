import { FirebaseError } from "firebase/app";
import { getAuth, updatePassword,  } from "firebase/auth";
import { useState } from "react";

export const useResetPass = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const resetPass = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const newPassword = getASecureRandomPassword();
      const result = await updatePassword(user, newPassword);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPass,
    isLoadingResetPass: loading,
    errorResetPass: error,
  };
};
