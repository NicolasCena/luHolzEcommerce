import { FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const deleteUser = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const result = await deleteUser(user);

    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteUser,
    isLoadingDeleteUser: loading,
    errorDeleteUser: error,
  };
};
