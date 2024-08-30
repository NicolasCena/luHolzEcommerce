import { initialState } from "./initialState";

export const reducer = (
  state = initialState,
  action: { type: string; value: any }
) => {
  const newState = { ...state };
  switch (action.type) {
    case "SET_PRODUCTS":
      newState.products = action.value;
      break;
    case "SET_USER":
        newState.user.admin = action.value.isAdmin;
        newState.user.name = action.value.name;
        newState.user.photo = action.value.photo;
        newState.user.email = action.value.email;
        newState.user.isAuthenticated = action.value.isAuthenticated;
      break;
    default:
      break;
  }
};
