import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ErrorFirebase } from "src/types/ErrorFirebase.type";

type PropsNewUser = {
  email: string;
  password: string;
  displayName: string;
  phoneNumber: number;
};

export const useNewUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorFirebase | null>(null);

  const newUser = async ({ email, password, displayName, phoneNumber }: PropsNewUser) => {
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
      await updateProfile(user, { phoneNumber });

      console.log("newuser", user);
    } catch (err: ErrorFirebase) {
      const errorCode = err?.code;
      const errorMessage = err?.message;
      console.error("errorCode", errorCode);
      console.error("errorMessage", errorMessage);
      setError({ code: errorCode, message: errorMessage });
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
