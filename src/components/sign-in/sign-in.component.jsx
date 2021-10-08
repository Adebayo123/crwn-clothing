import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            required
            name='email'
            id='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            type='password'
            required
            name='password'
            id='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
