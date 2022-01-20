// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "LOAD_TRANSACTIONS":
      return action.payload
    case "NEW_TRANSACTION":
      return [...state,action.payload]
    case "REJECT_TRANSACTION":
      console.log(state.filter(trans=> trans.id !== action.payload))
      return state.filter(trans=> trans.id !== action.payload)
    case "CONFIRM_TRANSACTION":
      console.log(state.map(trans=>{
        if(trans.id === action.payload){
          trans.status = "complete"
          trans.completeDate = new Date().toLocaleDateString("en-US")
          trans.transactionHash = 'xxxxxxxxxxxxxxxxxxxxx'
        }
        return trans
      }))
      return state.map(trans=>{
        if(trans.id === action.payload){
          trans.status = "complete"
          trans.completeDate = new Date().toLocaleDateString("en-US")
          trans.transactionHash = 'xxxxxxxxxxxxxxxxxxxxx'
        }
        return trans
      })
    default:
      return {
        ...state
      }
  }
}