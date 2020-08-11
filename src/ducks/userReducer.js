import axios from 'axios';


// CREATE AN INITIAL STATE OBJECT THAT WILL EVENTUALLY BE USED TO SET AN INITIAL STATE PROPERTY ON THE REDUX STORE AFTER BEING PASSED THROUGH THE REDUCER
const initialState = {
    email: null,
    firstName: null,
    lastName: null
};
//ACTION TYPES
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

//ACTION CREATORS
//THE ACTION CREATOR HERE DEFINES AN ACTION TYPE AND PAYLOAD THAT WILL BE USED BY THE REDUCER FUNCTION
// TO UPDATE VALUES IN THE REDUX STORE. THIS FUNCTION ITSELF WILL BE INVOKED IN A
// COMPONENT VIA PROPS ONCE THAT COMPONENT HAS CONNECTED TO IT VIA THE CONNECT METHOD
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res=> res.data)
    return{
        type: REQUEST_USER_DATA,
        payload: data
        // payload: axios.get('/auth/user-data').then(res => res.data)
    }
}
//export reducer function that returns state to the store
export default function reducer(state= initialState, action){
    switch(action.type){
        // case`${REQUEST_USER_DATA}_FULFILLED` 
        case REQUEST_USER_DATA + '_FULFILLED':
        const {email, firstName, lastName}= action.payload.user
        return {email, firstName, lastName};
//better practice example below
        //return {...state, email, firstName, lastName}; 
//im copying state but only changing :email, firstName and lastName
        default:
            return state;
    }
}