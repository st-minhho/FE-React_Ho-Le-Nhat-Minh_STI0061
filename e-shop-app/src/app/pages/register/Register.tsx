import React, { useRef, useState } from "react";

const Register = () => {

  const [state, setState] = React.useState({
    email:'',
    password: '',
    repassword: '',
  });


  const inputRef = useRef(null);

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
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(state.email === ''){
      alert('Vui long nhap email')
    }else if(!emailReg.test(state.email)){
      alert('Vui long nhap dung dinh dang email')
    }

    if(state.password === ''){
      alert('Vui long nhap password')
    }else if(state.password.length < 8){
      alert('Vui long nhap password toi thieu 8 ki tu')
    }

    if(state.repassword === ''){
      alert('Vui long nhap lai password')
    }else if(state.password !== state.repassword){
      alert('Mat khau khong trung ')
    }

    
  }

  return (
    <main>
      <section className="section-register">
        <form className="register-form" onSubmit={(e)=>handleSubmit(e)}>
          <input className="register-input" type="text" name="email" value={state.email} placeholder="Enter your email" ref={inputRef} onChange={(e) => handleInput(e)} />
          <input className="register-input" type="text" name="password" value={state.password} placeholder="Enter your password" ref={inputRef} onChange={(e) => handleInput(e)} />
          <input className="register-input" type="text" name="repassword" value={state.repassword} placeholder="Retype your password" ref={inputRef} onChange={(e) => handleInput(e)} />
          <button className="btn btn-primary btn-register" type="submit" >Register</button>
        </form>
      </section>
    </main>
  )
}
export default Register;