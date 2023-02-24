import { GET_REGIS ,GET_REGIS_GOOGLE} from "../action/loginAction";
import { GET_LOGIN,GET_LOGIN_GOOGLE } from "../action/loginAction";

const innitialState ={

    getRegis : false,
    getRegisLoading : false,
    getRegisError : false,
   
    getLogin: false,
    getLoginLoading : false,
    getLoginError : false,

    getLoginGoole: false,
    getLoginLoadingGoogle : false,
    getLoginErrorGoogle : false,

    getRegisnGoole: false,
    getRegisLoadingGoogle : false,
    getRegisErrorGoogle : false,

    getWarning : false
}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_REGIS :
            return {
                ...state,
                getRegis : action.payload.data,
                getRegisLoading : action.payload.loading,
                getRegisError : action.payload.errorMassage

            }
        case GET_LOGIN :
            console.log(state.getLoginLoadingGoogle)
            return {
                ...state,
                getLogin : action.payload.data,
                getLoginLoading : action.payload.loading,
                getLoginError : action.payload.errorMassage

            }
        case GET_LOGIN_GOOGLE :
            console.log('after', state.getLoginGoogle)
            return {
                ...state,
                getLoginGoogle : action.payload.data,
                getLoginLoadingGoogle : action.payload.loading,
                getLoginErrorGoogle : action.payload.errorMassage

            }
        case GET_REGIS_GOOGLE :
            return {
                ...state,
                getRegisGoogle : action.payload.data,
                getRegisLoadingGoogle : action.payload.loading,
                getRegisErrorGoogle : action.payload.errorMassage

            }
        default:
            return state;
    }
}

export default job