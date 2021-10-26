// import { getAuth } from '@firebase/auth';
// import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


// const handleEmailChange = e => {
//     setEmail(e.target.value);
// }

// const handlePasswordChange = e => {
//     setPassword(e.target.value);
// }

// const handleRegistration = e => {
//     console.log(email, password);
//     e.preventDefault();
// }


const Login = () => {
    const { signInUsingGoogle, signInUsingFacebook, signInUsingGithub } = useAuth();
    return (
        <>
            <div className="mx-5">
                <form>
                    <h3 className="text-primary">Please Register</h3>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
            <div>
                <h1>Or:</h1>
                <h4>Sign in with:</h4>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
            <br />
            <div>
                <button onClick={signInUsingFacebook} className="btn btn-warning">Facebook Sign In</button>
            </div>
            <br />
            <div>
                <button onClick={signInUsingGithub} className="btn btn-warning">Github Sign In</button>
            </div>
        </>
    );
};

export default Login;