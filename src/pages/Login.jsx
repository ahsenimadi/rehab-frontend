import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Preloader from '../components/Preloader'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errMsg, setErrMsg] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn) {
            navigate('/admin')
        }

        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [navigate])

    const checkUser = () => {
        if (email == 'info@ppreddyrehabcare.com' && password == '123456') {
            localStorage.setItem('isLoggedIn', true)
            setEmail('')
            setPassword('')
            setErrMsg(false)
            navigate('/admin')
            // unstable_HistoryRouter
        } else {
            setErrMsg(true)
        }
    }
    return (
        <>
            {loading ? <Preloader /> : (
                <>
                    <Header />
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card shadow border-0 bg-first text-light rounded-4">
                                    <div className="card-header text-center">
                                        <h4 className='mb-0'>Login</h4>
                                    </div>
                                    <div className="card-body py-5">
                                        <input type="email" className={`form-control mb-3 ${errMsg === true && "border-danger"}`} onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
                                        <input type="password" className={`form-control mb-3 ${errMsg === true && "border-danger"}`} onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                                        {errMsg === true && (
                                            <p className="text-danger">Invalid email or password</p>
                                        )}
                                        <button className='btn btn-second' onClick={checkUser}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Login