import { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

export const useEmailVerification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const language = useAppSelector((state) => state.language);
  
  const sendVerificationEmail = async () => {
    const auth = getAuth();

    setLoading(true);
    setError(null);

    try {
      auth.languageCode = language;
      if (auth.currentUser) await sendEmailVerification(auth.currentUser);
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
