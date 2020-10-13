import { getAuthUserDataThunkCreator } from "./auth-reducer";


// ACTION TYPES
const INITIALIZED = "INITIALIZED"


// DATA
let initialState = {
    initialized: false
}



// REDUCER
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case INITIALIZED:
            
            return {
                ...state,
                initialized: true
            }
                default:
                    return state;
    }

}





// ACTION CREATORS
export  const initializedUser = () => {
    return {
        type: INITIALIZED
    }
}


// THUNKS
export const initializedThunkCreator = () => (dispatch) => {
 const promise = dispatch(getAuthUserDataThunkCreator())
  
  Promise.all([promise])
  .then(() => {
        dispatch(initializedUser()) 
    })
    
   }


export default appReducer;