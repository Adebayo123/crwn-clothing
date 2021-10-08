import { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    Sign IN
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;
