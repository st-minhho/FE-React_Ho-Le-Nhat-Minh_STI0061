import React, { ChangeEvent, FormEvent, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext, RegisterContextType } from "../../shared/context/GlobalContext";
import { SetLocal } from "../../shared/helper/LocalStorage";
import Button from "../../shared/partial/Button";
import Input from "../../shared/partial/Input";

const Register = () => {
  
  const navigate = useNavigate()
  const {setUser} = useContext(GlobalContext) as RegisterContextType

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const comfirmPasswordRef = useRef<HTMLInputElement>(null)

  const [state, setState] = React.useState({
    email:'',
    password: '',
    comfirmPassword: '',
  });

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const nameInput = e.target.name
    setState({
      ...state,
      [nameInput]: value,
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    emailRef.current?.classList.remove('error')
    passwordRef.current?.classList.remove('error') 
    comfirmPasswordRef.current?.classList.remove('error') 
    let flag = true;

    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(state.email === '' || !emailReg.test(state.email)){
      emailRef.current?.classList.add('error')
      flag = false
    }

    if(state.password === '' || state.password.length < 8){
      passwordRef.current?.classList.add('error')
      flag = false
    }

    if(state.comfirmPassword === '' || state.password !== state.comfirmPassword){
      comfirmPasswordRef.current?.classList.add('error')
      flag = false
    }

    if(flag){
      SetLocal('token', state.email)
      setUser(state.email)
      navigate('/')
    }
  }

  return (
    <main>
      <section className="section-register">
        <form className="register-form" onSubmit={(e)=>handleSubmit(e)}>
          <input className="register-input" type="text" name="email" value={state.email} placeholder="Enter your email" ref={emailRef} onChange={(e) => handleInput(e)} />
          <input className="register-input" type="password" name="password" value={state.password} placeholder="Enter your password" ref={passwordRef} onChange={(e) => handleInput(e)} />
          <input className="register-input" type="password" name="comfirmPassword" value={state.comfirmPassword} placeholder="Retype your password" ref={comfirmPasswordRef} onChange={(e) => handleInput(e)} />
          <Button className={"btn btn-primary btn-register"} type={"submit"} text={'Register'}/>
        </form>
      </section>
    </main>
  )
}

export default Register;
