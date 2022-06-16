const initialState = {
  isLoggedIn : false,
    token : '',
    emailId : '',
    userId : '',
    msg: '' ,
    loginUserDetails: {}
}

export default function userReducer(state = initialState , action)
{
    switch(action.type) {
        case 'REDIRECT_TO_LOGIN':
            return {
              ...state, useverificationstatus:action.useverificationstatus,  msg: 'Kindly login with email id and temporary password!!'
            };
        case 'REDIRECT_TO_Register':
            return {
              ...state, useverificationstatus:action.useverificationstatus,  msg: 'You dont have account with provided emaild id, Kindly register!!'
            };
        case 'LOGIN_USER':
          return {
            ...state, msg: action.payload , isLoggedIn : action.isLoggedIn , loginUserDetails : action.loginUserDetails
          };
        case 'SET_CURRENT_USER':
        console.log('step#2' + action.payload);
          return{
            ...state,
            loginUserDetails:action.payload,
            isLoggedIn:true
        }
        case 'REGISTER_USER':
            return {
              ...state, allUsers:'',  msg: ''
            };
        case 'REDIRECT_TO_UPDATE_PWD':
            return {
              ...state, token:action.payload,  msg: action.msg
            };

        case 'DB_ERROR':
            return {
              ...state, allUsers:JSON.parse(action.payload),  msg: JSON.parse(action.payload).message
            };
        default:
          return state;
      }  

    /* if(action.type === 'ADMIN') 
    { 
      //state;
        state.total = state.total - 1;
        console.log('inside reducer' + state.total);

        return {
            ...state
        }
    }
    else
    {
        return state;
    } */

} 