import styled from 'styled-components';

export const Login = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

export const Form = styled.form`
  border: 1px solid #db7093; 
  border-radius: 3px;
  padding: 3rem; 
  margin-bottom: 1rem;
`

export const InputField = styled.div`
  margin: 1rem;
  label {
    margin-right:1rem;
  }
  input {
    border: none;
    border-bottom: 1px solid #db7093;
    outline: none;
    -webkit-appearance:none;
  } 
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #db7093;
  font-size: 1rem;
  margin: auto;
  padding: 0.25rem 1rem;
  border: 1px solid #db7093;
  border-radius: 3px;
  &:hover {
    background-color: #F6F6F6;
  }
`

export const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`