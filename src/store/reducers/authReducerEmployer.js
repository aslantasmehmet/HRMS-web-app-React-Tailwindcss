import { EMPLOYER_LOGIN, EMPLOYER_LOGOUT } from "../actions/authActionsEmloyer";
import { authItemEmployer } from "../initialValues/authItemEmployer";

const initialState = {
    authItemEmployer:authItemEmployer
}

export default function authReducer(state=initialState,{type,payload}){
    switch (type) {
        case EMPLOYER_LOGIN:
            state.authItemEmployer = payload
            return{
                ...state,
                authItemEmployer:[...[{loggedIn:true,employer:payload}]]
            }
        case EMPLOYER_LOGOUT:
            state.employer = payload
            return{
                ...state,
                authItemEmployer:[{loggedIn:false}]
            };

        default:
            return state;
    }

    
}
