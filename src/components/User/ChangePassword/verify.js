import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import {motion} from 'framer-motion';


function VerifyOTP (props) {
    const navigate = useNavigate();
    const [data, setData] = useState({})

    useEffect(() => {setData(props.data)}, [props])

    // Fields
    const [code, setCode] = useState('')
    const [validCode, setValidCode] = useState(false)

    // Error treatment
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    
    // Code validation
    useEffect(() => {
        if(code.length === 6) setValidCode(true); else setValidCode(false)
        setSuccess(false)
        setError(false)
    }, [code])

    // Perform resend
    const [resendAvailable, setResendAvailable] = useState(true);
    async function handleResend(e){
        e.preventDefault();
        setResendAvailable(false)
        const url = BASEURL + '/auth/password/reset'
        const response = await axios.get(
            url,
            {withCredentials: true}).catch((error) => {
                setError(true)
            if (error.response.status === 403)
                navigate('/login')
            else
                setErrorMsg('Server is currently unavailable')
        }).then((response) => {return response})
        if (response)
            setSuccess(true)
            setSuccessMsg(' Email has been sent again!')
    }

    // Perform change
    async function handleSubmit(e){
        e.preventDefault();
        setError(false)
        setValidCode(false)
        setSuccess(false)
        const url = BASEURL + '/auth/password/reset'
        const response = await axios.post(
            url,
            {token: code, password1: data.password1, password2: data.password2},
            {withCredentials: true}).catch((error) => {
            setError(true)
            setValidCode(false)
            if (error.response.status === 401)
                setErrorMsg(error.response.data.msg)
            else if (error.response.status === 400)
                setErrorMsg('Please, insert a valid code.')
            else if (error.response.status === 403)
                navigate('/login')
            else
                setErrorMsg('Server is currently unavailable')
        }).then((response) => {return response})
        if (response) {
            setError(false)
            setValidCode(false)
            setSuccess(true)
            setSuccessMsg(' Password changed successfully!')
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        }
    }


    return (
        <motion.main
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}>
           <div className='container'>
                {error ? <div class="alert alert-danger" role="alert"><strong>Ops!</strong>  {errorMsg}</div>: ''}
                {success ? <div class="alert alert-success" role="alert">
                                <strong>Yay!</strong>  {successMsg}
                        </div>: ''}
                <p>
                    Before we continue,<br/>
                    please insert the <strong>verification code</strong>.<br/>
                    we've just send to your email. It's for your safety.
                </p>
                <input
                type='text'
                className='py-1 text-center px-3 w-100'
                placeholder='Verification Code'
                onChange={(e) => setCode(e.target.value)}/>
                <button
                onClick={(e) => handleSubmit(e)}
                disabled={!validCode}
                className='mt-3 btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3'>
                    Change Password
                </button>
                <small>
                <strong>Didn't receive it? </strong>Click&nbsp;
                    <a onClick={(e) => {
                        if(resendAvailable) handleResend(e); else console.log('resend not avaiable.')}}>
                        <u><strong>here</strong></u>
                    </a>, we will send it again!<br/>
                    Be sure to check your <strong>spam</strong> and <strong>trash</strong> folders.
                </small>
                    <hr className='mt-5'></hr>       
            </div>
            </motion.main>
    )
}

export default VerifyOTP;