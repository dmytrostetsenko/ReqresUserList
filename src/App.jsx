import React from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserList } from "./Containers/UserList/UserList";


export const App = () => {
    const {token} = useSelector(state => state.loginReduser)
    
    return (
        <>
            {token ? <UserList/> : <LoginForm/>}
        </>
    )
};

