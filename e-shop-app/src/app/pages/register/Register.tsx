import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext, RegisterContextType } from "../../shared/context/GlobalContext";
import { setLocal } from "../../shared/helper/LocalStorage";
import Button from "../../shared/partial/Button";

const Register = () => {
  
  const navigate = useNavigate()
  const {setUser} = useContext(GlobalContext) as RegisterContextType

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const repasswordRef = useRef<HTMLInputElement>(null)

  const [state, setState] = React.useState({
    email:'',
    password: '',
    repassword: '',
  });

  const handleInput = (e: any) => {
    const value = e.target.value;
    const nameInput = e.target.name
    setState({
      ...state,
      [nameInput]: value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault(); 
    emailRef.current?.classList.remove('error')
    passwordRef.current?.classList.remove('error') 
    repasswordRef.current?.classList.remove('error') 
    
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

    if(state.repassword === '' || state.password !== state.repassword){
      repasswordRef.current?.classList.add('error')
      flag = false
    }

    if(flag){
      setLocal('token', state.email)
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
          <input className="register-input" type="password" name="repassword" value={state.repassword} placeholder="Retype your password" ref={repasswordRef} onChange={(e) => handleInput(e)} />
          <Button className={"btn btn-primary btn-register"} type={"submit"} text={'Register'}/>
        </form>
      </section>
    </main>
  )
}
export default Register;
