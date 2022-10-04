import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import parse from 'html-react-parser';


// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Validators
import { validateEmail } from '../Login/validators';

// Animated Routes
import {motion} from 'framer-motion';


function Register () {
    const navigate = useNavigate();

    // Fields
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [discord, setDiscord] = useState('')
    const [twitter, setTwitter] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')

    // Form validation
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        const url = BASEURL + '/auth/register'
        const response = await axios.post(
            url, {
                email: email, password1: password1, password2: password2,
                nickname: nickname, discord: discord, twitter: twitter,
                facebook: facebook, instagram: instagram}).catch((error) => {
            setError(true)
            if (error.response.status === 401)
                setErrorMsg(error.response.data.message)
            else if (error.response.status === 400){
                let newErrors = ''
                error.response.data.errors.forEach((error, i) => {
                    newErrors = newErrors + error.msg + '<br/>'
                })
                setErrorMsg(newErrors)
            } 
            else
                setErrorMsg('Server is currently unavailable')
        }).then((response) => {return response})
        if (response) {
            alert('User successfully created!')
            navigate('/login');
        }
    }

    return (
        <motion.main
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-4 px-4 text-center'>
                        <h2 className='color_third'>
                            <strong>Sign Up!</strong>
                        </h2>
                        <p className='color_third'>
                            Create an account, redeem coins<br/>
                            and buy art related stuff!<br/>
                        </p>
                        <hr className='mt-4 mb-5'/>
                        {error ? <div class="alert alert-danger" role="alert">
                            <strong>Ops!</strong><br/> {parse(errorMsg)}
                        </div>: ''}

                        <form className='text-center'>
                            <div class="form-group text-center color_third">
                                <small className='m-0'>Your nickname must be <strong>alphanumeric</strong><br/>and contain at least <strong>3 characters.</strong></small>
                                <input
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder='Nickname'
                                className="form-control text-center mb-3" />
                            </div>
                            <div class="form-group text-center">
                                <input
                                autoComplete="off"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                className="form-control text-center" />
                            </div>
                            <div className="form-group mt-3 text-center color_third">
                                <small>Your password must contain at least:<br/>
                                <strong>8 characters, one letter and one number.</strong></small>
                                <input
                                autoComplete="off"
                                type="password"
                                onChange={(e) => setPassword1(e.target.value)}
                                placeholder='Password'
                                className="mt-1 form-control text-center"/>
                            </div>
                            <div className="form-group mt-3 text-center">
                                <input
                                autoComplete="off"
                                type="password"
                                onChange={(e) => setPassword2(e.target.value)}
                                placeholder='Enter password again'
                                className="form-control text-center"/>
                            </div>


                            <div className='row'>
                                <div className='col-12 mt-4 color_third'>
                                    <h6 className='m-0'><strong>Contact Information</strong></h6>
                                    <small>
                                        Fill as much as you can! None are obligatory.
                                    </small>
                                </div>
                                <div className='col-6 color_third'>
                                    <div className="form-group mt-3 text-center">
                                        <input
                                        autoComplete="off"
                                        type="text"
                                        onChange={(e) => setDiscord(e.target.value)}
                                        placeholder='Discord'
                                        className="form-control text-center" />
                                        <small>Inform your #ID as well!</small>
                                    </div>
                                    <div className="form-group mt-3 text-center">
                                        <input
                                        autoComplete="off"
                                        type="text"
                                        onChange={(e) => setInstagram(e.target.value)}
                                        placeholder='Instagram'
                                        className="form-control text-center" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-group mt-3 text-center">
                                        <input
                                        autoComplete="off"
                                        type="text"
                                        onChange={(e) => setTwitter(e.target.value)}
                                        placeholder='Twitter'
                                        className="form-control text-center" />
                                        <small><br/></small>
                                    </div>
                                    <div className="form-group mt-3 text-center">
                                        <input
                                        autoComplete="off"
                                        type="text"
                                        onChange={(e) => setFacebook(e.target.value)}
                                        placeholder='Facebook'
                                        className="form-control text-center" />
                                    </div>
                                </div>
                            </div>
                            <button 
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-primary btn-lg w-100 hvr-wobble-top mt-4 btn-custom_1 px-4">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}

export default Register;