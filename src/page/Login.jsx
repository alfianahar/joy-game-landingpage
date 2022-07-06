import React, { useState } from 'react'
import Register from '../component/Register'
import Signin from '../component/Signin'

const Login = () => {

    const [page, setPage] = useState(true)

    return (
        <div className='flex flex-row bg-[#f4f4f4] h-screen'>
            <div>
                <img
                    src={process.env.PUBLIC_URL + 'img/Illustration.png'} alt="login"
                    className='hidden'
                />
            </div>
            {page ? <Signin /> : <Register />}
        </div>
    )
}

export default Login