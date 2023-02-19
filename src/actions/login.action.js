import { CONSTANT } from "../constants/constants";

export const fetchLoginThunk = (email, password) => (dispatch) => {
    fetch(`${CONSTANT.API_URL}login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((response) => {
        if(response.token){
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.token
            })
        localStorage.setItem('token', response.token)
        }else{
            dispatch({
                type: 'LOGIN_ERROR',
                payload: response.error
            })
        }
    })
}

export const logoutAction = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT',
        payload: null
    })
    localStorage.removeItem('token')
}