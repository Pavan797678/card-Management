import types from "../types";

const initial_state = {
    userData: {},
   

}

export default function Auth(state = initial_state, action) {
   alert()
    console.log(action.type,"dsvjbksb vablVWVOBGOlov VL--------")

    switch (action.type) {
       
        case types.LOGIN: {
            const {user} = action.payload
           
            return { userData: user };

        }
  
        default: {
            return { ...state }
        }
    }
}