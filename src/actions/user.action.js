import { CONSTANT } from "../constants/constants";

export const fetchUserListThunk = (page) => (dispatch) => {
    fetch(`${CONSTANT.API_URL}users?page=${page}`)
        .then(res => res.json())
        .then((res) => {
             res.data.map((user) => {
                user.name = `${user.first_name} ${user.last_name}`;
                delete user.first_name;
                delete user.last_name
            })
            dispatch({
                type: 'FETCH_USERS_SUCCESS',
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'FETCH_USERS_FAILURE',
                payload: error
            })
        });
};

export const fetchNewUserThunk = (newUser) => (dispatch) => {
    fetch(`${CONSTANT.API_URL}users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: newUser.name,
            email: newUser.email
        })
    })
    .then(res => res.json())
    .then((res) => {
        if (res){
            dispatch({
                type: 'CREATE_NEW_USER',
                payload: res
            })
        }
    });
};

export const fetchDeleteUser = (id) => (dispatch) => {
    fetch(`${CONSTANT.API_URL}users/2`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((response) => {
        if(response.status == 204){
            dispatch({
                type: 'DELETE_USER',
                payload: id
            })
        }
    });
};

export const fetchUpdateUser = (user) => (dispatch) => {
    fetch(`${CONSTANT.API_URL}users/2`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
        })
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        dispatch({
            type: 'UPDATE_USER',
            payload: {
                ...user,
                name: response.name,
                email: response.email
            }
        })
    })
}
