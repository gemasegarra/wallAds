import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from './StyledComponents';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    console.log(e)
  }
  handleSubmit = (e) => {
    console.log(e)
  }
  render() {
    return (
      <>
      <Login>Sign in to NodePop</Login>
      <FormContainer>
      <Form onSubmit={this.handleSubmit}>
        <InputField>
          <label htmlFor='username'>Username:</label> 
          <input type='text' id='username' onChange={this.handleSubmit}></input>
        </InputField>
        <InputField>
          <label htmlFor='password'>Password: </label> 
          <input type='password' id='password'  onChange={this.handleChange}></input>
        </InputField>
        <Button>Sign in</Button>
      </Form> 
      </FormContainer>
      <CreateAccount>New to NodePop?</CreateAccount>
      <StyledLink><Link to='/SignUp'> Register here</Link>.</StyledLink>
      </>
    )
  }
};

export default SignIn;