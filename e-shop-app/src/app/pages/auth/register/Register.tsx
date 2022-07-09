import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStorage } from "../../../shared/helper/localstorage";
import Button from "../../../shared/partial/Button";
import { getToken } from "../auth.actions";

const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const password = watch('password')
  const onSubmit = (data: any) => {
    console.log(data)
    setStorage('token', data)
    dispatch(getToken(data))
    navigate('/')
  };

  return (
    <main>
      <section className="section-register">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter your Email"
            className={errors.email ? 'register-input error' : 'register-input'}
            {...register("email", { required: true, pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ })} />
          <input
            placeholder="Enter your Password"
            className={errors.password ? 'register-input error' : 'register-input'}
            type="password"
            {...register("password", { required: true, minLength: 8 })} />
          <input
            placeholder="Enter comfirm password"
            className={errors.comfirmPassword ? 'register-input error' : 'register-input'}
            type="password"
            {...register("comfirmPassword", { required: true, validate: (value: any) => value === password })} />
          <Button className={"btn btn-primary btn-register"} type={"submit"} text={'Register'} />
        </form>
      </section>
    </main>
  )
}

export default Register;
