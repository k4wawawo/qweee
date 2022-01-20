// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return [
        ...state,
        action.payload,
      ]
    case "LOAD_USERS":
      return action.payload
    case "DELETE_USER":
      return state.filter(user=>user.id !== action.payload)
    case "EDIT_USER":
      return state.map(user=>user.id === action.payload.id ? action.payload : user)
    default:
      return {
        ...state
      }
  }
}