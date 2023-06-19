import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../../Context/userContext";

function SignUpForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { addUserData } = useUserContext()
  const onSubmit = (data) => {
    addUserData(data)
    navigate("/")
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="card mx-auto mt-5 p-4" style={{ width: '25rem' }}>
          <h3>Sign up</h3>
          <label><b>Email</b></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>)}
 <br></br>
          <label><b>Username</b></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register('username', { required: true })}
          />
          {errors.username && errors.username.type === "required" && (
            <p className="errorMsg">UserName is required.</p>)}
            <br></br>
          <label><b>Password</b></label>
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
          <button className="btn btn-primary">Submit</button>
            </div>
        </div>
      </form>
    </div>
  )
}
export default SignUpForm