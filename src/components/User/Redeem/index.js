import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import {motion} from 'framer-motion';


function Redeem () {
    const navigate = useNavigate();

    // Fields
    const [code, setCode] = useState('')
    const [validCode, setValidCode] = useState(false)

    // Error treatment
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    

    useEffect(() => {
        if(code.length > 3)
            setValidCode(true)
            
        setSuccess(false)
        setError(false)
    }, [code])

    // Perform redeem
    async function handleSubmit(e){
        e.preventDefault();
        const url = BASEURL + '/user/redeem'
        const response = await axios.post(url, {code}, {withCredentials: true}).catch((error) => {
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
            setSuccessMsg(response.data.value + ' Pan Coins redeemed succesfully!')
        }
    }


    return (
        <motion.main
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}>
           <div className='container'>
                <div className='row justify-content-center text-center'>
                    <div className='col-5 mt-3 mb-5 color_third'>
                        <Link to='/user' className='color_third'>
                            <small className='text-right color_third'>
                                <strong><u> &#8592; Return to user area</u></strong>
                            </small><br/>
                        </Link>
                        <hr className='mt-5'></hr>
                        <div className='px-5 mt-5'>
                            {error ? <div class="alert alert-danger" role="alert"><strong>Ops!</strong>  {errorMsg}</div>: ''}
                            {success ? <div class="alert alert-success" role="alert">
                                        <strong>Yay!</strong>  {successMsg}
                                     </div>: ''}
                            <h3><strong>Redeem Coins!</strong></h3>
                            <p className='mb-4'>
                                Enter your <u>card code</u> below and redeem <i>Pan Coins!</i>
                                </p>
                            <input
                            onChange={(e) => setCode(e.target.value)}
                            type='text'
                            placeholder='d68571ec1311cbd9563ca1b3e16dde2d738614ee'
                            className='btn-lg px-3 w-100'></input>

                            <button disabled={!validCode} onClick={(e) => {handleSubmit(e)}} className='mt-4 btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3'>
                                Redeem
                            </button>
                        </div>      
                    </div>
                </div>
            </div>
        </motion.main>
    )
}

export default Redeem;