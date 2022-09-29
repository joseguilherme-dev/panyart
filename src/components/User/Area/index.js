import { useState, useEffect,  } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
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
            console.log(response)
            console.log('entrou aq lol')
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
                    <div className='col-4 my-5 color_third'>
                        <p> Hey, <strong>{userInfo.nickname}</strong>!</p>
                        <small> <i>Your Pan Coins:</i></small><br/>
                        <div className='coins-box'>
                            <input
                            className='text-center py-2 w-50'
                            type='text' defaultValue={userInfo.coins} disabled/>
                            <img src={panCoinsImg}/>
                        </div>
                        
                        

                        <hr className='mt-4'></hr>

                        <div className='row'>
                            <div className='col-12 mt-2 mb-1'>
                                <h6>Coins store:</h6>
                            </div>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 px-4 me-3'>
                                    Redeem Coins
                                </a>
                            </div>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 px-4 me-3' disabled>
                                    Buy on Store
                                </a>
                            </div>
                        </div>

                        <h6 className='mt-3'>Account:</h6>

                        <div className='row'>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 px-4 me-3'>
                                    Edit Information
                                </a>
                            </div>
                            <div className='col-6'>
                                <a
                                className='btn hvr-wobble-top btn-lg btn-custom_1 px-4 me-3' disabled>
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