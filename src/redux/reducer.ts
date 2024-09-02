import { initialState } from "./initialState";

export const reducer = (
  state = initialState,
  action: { type: string; value: any }
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.value,
      };

    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          admin: action.value.isAdmin,
          name: action.value.name,
          photo: action.value.photo,
          email: action.value.email,
          isAuthenticated: action.value.isAuthenticated,
        },
      };

    case "SET_LOADING_CHECKING_USER":
      return {
        ...state,
        isCheckingUser: action.value,
      };

    default:
      return state;
  }
};
