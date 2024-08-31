import { UserCredential } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentData,
} from "firebase/firestore";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";

interface ExtendedUserCredential extends UserCredential {
  _tokenResponse?: {
    isNewUser: boolean;
  };
}

export const useCheckRol = () => {
  const dispatch = useAppDispatch();

  const consultUserBBDD = async (result: ExtendedUserCredential) => {
    const firestore = getFirestore();
    const docuRef = doc(firestore, `users/${result.user.uid}`);
    const isNewUser = result._tokenResponse?.isNewUser;
    
    if (isNewUser) {
      await setDoc(docuRef, { email: result.user.email, isAdmin: false });
      return dispatch({
        type: "SET_USER",
        value: {
          email: result.user.email,
          isAdmin: false,
          photo: result.user.photoURL,
          name: result.user.email,
          isAuthenticated: true,
        },
      });
    }

    const docuCifrada: DocumentData = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    return infoFinal;
  };

  return {
    consultUserBBDD,
  };
};
