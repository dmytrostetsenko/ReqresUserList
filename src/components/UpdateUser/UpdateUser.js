import React, {useState} from "react";
import defaultAvatar from '../../assets/img/default-avatar.jpg'
import { useDispatch } from "react-redux";
import { fetchDeleteUser, fetchUpdateUser } from "../../actions/user.action";

export const UpdateUser = ({setActive, user}) => {

    const [updUser, setUpdUser] = useState({...user})
    const dispatch = useDispatch();

    const onNameInputChange = (e) => {
        setUpdUser({...updUser, name: e.target.value})
    }
    const onEmailInputChange = (e) => {
        setUpdUser({...updUser, email: e.target.value})
    };

    const onDeleteUser = () =>{
        dispatch(fetchDeleteUser(updUser.id))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUpdateUser(updUser))
        setActive(false)
    }

    return(
        <>
            <form className="form upd-form" onSubmit={onSubmit}>
                <img className="avatar form__avatar" src={updUser.avatar ? updUser.avatar : defaultAvatar} alt='avatar' />
                <input type='text' className="form__input" value={updUser.name} onChange={onNameInputChange} />
                <input type='text' className="form__input" value={updUser.email} onChange={onEmailInputChange} />
                <div className="form__buttons">
                    <button className="button form__button" type='submit'>Update</button>
                    <button className="button form__button" onClick={onDeleteUser}>Delete</button>
                </div>
            </form>
        </>
    )
}