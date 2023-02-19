const initialState = {
    token: localStorage.getItem('token'),
    loginError: null
}

export const loginReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return{
                ...state,
                token: action.payload,
                loginError: null
            }
        }
        case 'LOGIN_ERROR': {
            return{
                ...state,
                loginError: action.payload
            }
        }
        case 'LOGOUT':
            return{
                ...state,
                token: action.payload
            }
    };
    return state;
};
