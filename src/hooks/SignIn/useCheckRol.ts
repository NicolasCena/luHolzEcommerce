import { User } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentData,
} from "firebase/firestore";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";

type Props = {
  add: boolean;
  user: User;
  media: number;
};

export const useCheckRol = () => {
  const dispatch = useAppDispatch();

  const consultUserBBDD = async ({ add, user, media }: Props) => {
    const firestore = getFirestore();
    const docuRef = doc(firestore, `users/${user.uid}`);
    
    if (add) {
      await setDoc(docuRef, { email: user.email, isAdmin: false });
    };

    const docuCifrada: DocumentData = await getDoc(docuRef);
    const dataUser = docuCifrada.data();

    return dispatch({
      type: "SET_USER",
      value: {
        email: user.email,
        isAdmin: dataUser?.isAdmin,
        photo: user.photoURL,
        name: user.email,
        isAuthenticated: true,
        isVerifiedEmail: user.emailVerified,
        media: media,
      },
    });
  };

  return {
    consultUserBBDD,
  };
};
