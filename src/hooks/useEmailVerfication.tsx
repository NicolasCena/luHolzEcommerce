import { useState } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { ErrorFirebase } from "src/types/ErrorFirebase.type";

export const useNewUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorFirebase | null>(null);
  const [response, setResponse] = useState(null);

  const sendVerificationEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      await sendEmailVerification(user);
      setResponse("Verification email sent successfully.");
    } catch (err) {
      setError("Failed to send verification email.");
      console.error("Error sending verification email:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendVerificationEmail,
    isLoadingVerificationEmail: loading,
    errorVerificationEmail: error,
    responseVerificationEmail: response,
  };
};
