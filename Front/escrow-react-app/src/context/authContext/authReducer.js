// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      }
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        isAdmin: action.payload.isAdmin,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLogin: false,
      }
    case "SET_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      }
    default:
      return {
        ...state
      }
  }
}