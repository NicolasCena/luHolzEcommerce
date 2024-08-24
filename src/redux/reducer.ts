import { initialState } from "./initialState";

export const reducer = (state = initialState, action: { type: string; value: any; }) => {
    const newState = { ...state };
    switch (action.type) {
        case "SET_PRODUCTS":
                newState.products = action.value;
            break;
    
        default:
            break;
    }
}