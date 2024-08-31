import { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const useNewUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const sendVerificationEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    setLoading(true);
    setError(null);

    try {
      if (user) await sendEmailVerification(user);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    sendVerificationEmail,
    isLoadingVerificationEmail: loading,
    errorVerificationEmail: error,
  };
};
