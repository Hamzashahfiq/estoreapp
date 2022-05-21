const initialState = {
    data:12354
}


export default function Estorereducer(state = initialState, action ) {
  switch (action.type) {
      case "FATCHSTOREDATA":{
        return{
            ...state,
            data: action.payload
        }

      }
          
  
      default:
          return state
  }
}
