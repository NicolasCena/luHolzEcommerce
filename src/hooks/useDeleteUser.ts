import { FirebaseError } from "firebase/app";
import { getAuth, deleteUser } from "firebase/auth";
import { useState } from "react";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const deleteUserProfile = async () => {
    setLoading(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) await deleteUser(user);
      
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteUserProfile,
    isLoadingDeleteUser: loading,
    errorDeleteUser: error,
  };
};
