import React from 'react';

import '../scss/_sign-in-and-sign-up.scss'

import SignIn from '../../../components/clothing-site-components/sign-in-and-sign-up/_sign-in';
import SignUp from '../../../components/clothing-site-components/sign-in-and-sign-up/_sign-up';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUpPage;