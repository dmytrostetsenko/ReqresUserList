const initialState = {
    users: [],
    error: null
};

export const userReduser = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_SUCCESS': 
            return {
                ...state,
                users: action.payload
            }
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'CREATE_NEW_USER':
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id){
                        return action.payload;
                    }
                    return user;
                })
            };
    };
    return state;
};

