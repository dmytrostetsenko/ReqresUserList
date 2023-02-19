import React, {useState} from "react";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginThunk } from "../../actions/login.action";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        emaiError: '',
        passwordError: '',
        emailValid: false,
        passwordValid: false,
    })
    const {loginError} = useSelector(state => state.loginReduser)
    const dispatch = useDispatch();

    const onEmailInputChange = (e) => {
        const value = e.target.value;
        if(!value){
            setErrors({...errors, emaiError: 'Email is required', emailValid: false})
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)){
            setErrors({...errors, emaiError: 'invalid Email' , emailValid: false})
        }else{
            setErrors({...errors, emaiError: '', emailValid: true})
            setEmail(value)
        }
    }
    const onPasswordInputChange = (e) => {
        const value = e.target.value;
        if(!value){
            setErrors({...errors, passwordError: 'Password is required', passwordValid: false})
        }else{
            setPassword(value);
            setErrors({...errors, passwordError: '', passwordValid: true})
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchLoginThunk(email, password))
    }

    return(
        <div className="wrapper">
            <section className="section-form">
                <h1 className="form-heading">Welcome user</h1>
                <form className="form" onSubmit={onSubmit}>
                    <input type='text' className="form__input" placeholder="Email" onChange={onEmailInputChange} />
                    <input type='password' className="form__input" placeholder="Password" onChange={onPasswordInputChange} />
                    <button className="button form__button" type='submit' disabled={!errors.emailValid || !errors.passwordValid}>Log in</button>
                    <div>
                        {errors.emaiError && <span className="form__error" style={{color: "red"}}>{errors.emaiError}</span>}
                        <br />
                        {errors.passwordError && <span className="form__error" style={{color: "red"}}>{errors.passwordError}</span>}
                        <br />
                        {loginError && <span className="form__error" style={{color: "red"}}>{loginError}</span>}
                    </div>
                </form>
            </section>
            <Footer/>
        </div>
    )
}