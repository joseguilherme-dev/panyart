import { useState, useEffect,  } from 'react';
import { useNavigate, Navigate, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import {motion} from 'framer-motion';

// Images
import panCoinsImg from '../../../assets/img/pancoins.png'



function Area () {
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate();

    async function checkIfUserIsLoggedIn() {
        const url = BASEURL + '/auth/personal'
        await axios.get(url, {withCredentials: true})
        .catch((error) => {
            navigate('/login');
        }).then((response) => {
            setUserInfo(response.data.personal)
        })
    }

    useEffect(() => {
        (async () => {
            await checkIfUserIsLoggedIn()
        })();
    }, [])

    return (
        <motion.main
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        >
            
            <div className='container'>
                <div className='row justify-content-center text-center'>
                    <div className='col-5 mt-3 mb-5 color_third'>
                        <p> Hey, <strong>{userInfo.nickname}</strong>!</p>
                        <small> <i>Your Pan Coins:</i></small><br/>
                        <div className='coins-box'>
                            <input
                            className='text-center py-2 w-50'
                            type='text' defaultValue={userInfo.coins} disabled/>
                            <img src={panCoinsImg}/>
                        </div>
                        <hr className='mt-5'></hr>
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <Link to="redeem" className='btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3' data-toggle="modal" data-target="#exampleModal">
                                    Redeem Coins
                                </Link>
                            </div>
                            <div className='col-6'>
                                <span className="d-inline-block w-100" tabindex="0" data-toggle="tooltip" title="In soon!">
                                    <button data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                                    className='btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3' disabled>
                                        Buy on Store
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3'>
                                    Edit Account
                                </a>
                            </div>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3' disabled>
                                    Change Password
                                </a>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
        </motion.main>
    )
}

export default Area;