import { useState } from "react";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  UserCredential,
  User,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentData,
} from "firebase/firestore";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";
import { FirebaseError } from "firebase/app";

export const useSignInGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FirebaseError | null>(null);
  const dispatch = useAppDispatch();

  const getUserGoogle = async () => {
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log("result", result);
      const isNewUser = result?._tokenResponse?.isNewUser;
      consultUserBBDD(isNewUser, result.user);

    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, "errorMessage", errorMessage);
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const consultUserBBDD = async (add: boolean, user: User) => {
    const firestore = getFirestore();
    const docuRef = doc(firestore, `users/${user.uid}`);

    if (add) {
      await setDoc(docuRef, { email: user.email, isAdmin: false });
      return dispatch({
        type: "SET_USER",
        value: {
          email: user.email,
          isAdmin: false,
          photo: user.photoURL,
          name: user.email,
          isAuthenticated: true,
        },
      });
    };

    const docuCifrada: DocumentData = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    return infoFinal;
  };

  return {
    getUserGoogle,
    isLoadingGetUserGoogle: loading,
    errorGetUserGoogle: error,
  };
};
