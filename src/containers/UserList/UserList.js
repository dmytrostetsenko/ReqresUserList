import React, {useState, useEffect} from "react";
import { Header } from "../../components/Header/Header.js";
import { UserCard } from "../../Components/UserCard/UserCard.js";
import { Modal } from "../../Components/Modal/Modal.jsx";
import { AddUserForm } from "../../Components/AddUserForm/AddUserForm.js";
import { Footer } from "../../components/Footer/Footer.js";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../actions/login.action.js";
import { fetchUserListThunk } from "../../actions/user.action.js";

export const UserList = () => {
    const [modalActive, setModalActive] = useState(false);
    const page = 1;

    const {users, error} = useSelector((state) => state.userReduser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserListThunk(page))
    }, [])

    const nextPage = () => {
        dispatch(fetchUserListThunk(page + 1))
    }

    const prevPage = () => {
        dispatch(fetchUserListThunk(page - 1))
    }

    return(
        <>
            <div className="wrapper">
                <Header>
                    <button className="button users__add" onClick={() => setModalActive(true)} >New User</button>
                    <button className="button log-out" onClick={() => dispatch(logoutAction())} >Log out</button>
                </Header>
                <section className="users">
                    <h1 className="users__heading">Welcome on board</h1>
                    <p className="users__title">Our users</p>
                    {error ?
                        <div>
                            <p>Oooops something wrong</p>
                        </div> :
                        <>
                            <ul className='users__cards'>
                                {users.map(user => (
                                    <UserCard user = {user} key={user.id} />
                                ))}
                            </ul>
                            <div className="users__buttons-navigate">
                                <button className="button users__button-previous" onClick={prevPage}>Previous</button>
                                <button className="button users__button-next" onClick={nextPage}>Next</button>
                            </div>
                        </>
                        }
                    <Modal active={modalActive} setActive={setModalActive} >
                        <AddUserForm setActive={setModalActive} />
                    </Modal>
                </section>
                <Footer/>
            </div>
        </>

    )
}