import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../store/slices/userInfo.slice";

const Login = () => {
  //Creamos el hook para el token
  const { token, user } = useSelector((state) => state.userInfo);
  console.log(token);
  //Creamos el hook para el formulario
  const { register, handleSubmit } = useForm();
  //Creamos el hook para el dispatch
  const dispatch = useDispatch();
  //Creamos la funcion que se ejecutara al enviar el formulario
  const submit = (data) => {
    console.log(data);
    dispatch(loginUserThunk(data));
  };

  return (
    <main>
      {token ? (
        <section>
          <i className="bx bx-user-circle"></i>
          <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
          <button>Logout</button>
        </section>
      ) : (
        <form onSubmit={handleSubmit(submit)}>
          <h3>Welcome! Enter your email and password to continue.</h3>
          <div>
            <h4>Test Data</h4>
            <p>
              <i className="bx bx-envelope"></i>
              max@gmail.com
            </p>
            <p>
              <i className="bx bx-lock-alt"></i>
              pass1234
            </p>
          </div>
          <div>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
          </div>
          <button>Login</button>
          <p>
            Don't have an account?
            <span> Sign Up</span>
          </p>
        </form>
      )}
    </main>
  );
};

export default Login;
