import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

type PropsNewUser = {
  email: string;
  password: string;
  displayName: string;
};

export const useNewUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);

  const newUser = async ({ email, password, displayName }: PropsNewUser) => {
    setLoading(true);
    setError(null);

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Actualizamos el perfil del usuario con nombre y apellido
      await updateProfile(user, { displayName });
    } catch (error) {

      if (error instanceof FirebaseError) {
        setError(error);
      };
      
    } finally {
      setLoading(false);
    }
  };

  return {
    newUser,
    isLoadingNewUser: loading,
    errorNewUser: error,
  };
};
