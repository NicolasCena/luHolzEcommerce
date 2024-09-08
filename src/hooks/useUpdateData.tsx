import { useState } from "react";
import { getAuth, updateEmail } from "firebase/auth";

export const useUpdateData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const [response, setResponse] = useState(false);

  const updateEmailProfile = async (newEmail: string) => {
    setLoading(true);
    const auth = getAuth();

    try {
      if (auth.currentUser) {
        await updateEmail(auth.currentUser, newEmail);
        setResponse(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateEmailProfile,
    isLoadingUpdateData: loading,
    errorUpdateData: error,
    responseUpdateData: response,
  };
};
