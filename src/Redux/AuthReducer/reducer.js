import * as types from "./action.type.js";
const initalState = {
  isRegister: false,
  isAuth: false,
  isError: false,
  isLoading: false,
  token: "",
};
export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegister: true,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isRegister: false,
      };

    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };

    default:
      return state;
  }
};
