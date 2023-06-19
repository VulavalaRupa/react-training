import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../Context/userContext";
import {Link , useNavigate} from "react-router-dom"

const LoginForm = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {logIn} = useUserContext()
  const onSubmit = (data) => {
    logIn(data);
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        
        <div className="card mx-auto mt-5 p-4" style={{width:'25rem'}}>
        <h3>Login</h3>
            <label><b>Username : </b></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register('username', { required: true })}
            />
            {errors.username && errors.username.type === "required" && (
                <p className="errorMsg">UserName is required.</p>)}
          <br></br>
            <label><b>Password : </b></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required.</p>)}
          <br></br>
          <div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <p>Dont have an Account? <Link to="/signup">Sign Up</Link></p>
          </div>
          </div>
      
      </form>
      
    </div>
  );
};

export default LoginForm;