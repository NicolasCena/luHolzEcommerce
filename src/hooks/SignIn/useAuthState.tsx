import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { useCheckRol } from "./useCheckRol";
import { useAppDispatch } from "src/redux/hooks/useAppDispatch";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

export const useAuthState = () => {
  const { consultUserBBDD } = useCheckRol();
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleUserChange = async () => {
    dispatch({ type: "SET_LOADING_CHECKING_USER", value: true });
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
      console.log(user, 'USER')
      if (user) {
        await consultUserBBDD({ add: false, user, media: userState.media });
      };
      
    } catch (error) {
      console.error("Error handling user state change:", error);
    } finally {
      dispatch({ type: "SET_LOADING_CHECKING_USER", value: false });
    }
  };

  useEffect(() => {
    handleUserChange();
  }, []);

  return { handleUserChange };
};
