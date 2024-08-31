import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useCheckRol } from "./useCheckRol";

export const useAuthState = () => {
  const [loading, setLoading] = useState(false);
  const { consultUserBBDD } = useCheckRol();

  const handleUserChange = async () => {
    const auth = getAuth();

    try {
      const user = await new Promise<User | null>((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            unsubscribe();
            resolve(user);
          },
          reject
        );
      });

      if (user) {
        await consultUserBBDD({ add: false, user });
      }
    } catch (error) {
      console.error("Error handling user state change:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleUserChange();
  }, []);

  return { loading, handleUserChange };
};
