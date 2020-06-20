import React from "react";
import { useDispatch } from "react-redux";

import "./Login.css";
import Card from "../shared/components/UIElements/Card/Card";
import Title from "../shared/components/UIElements/Title/Title";
import Input from "../shared/components/FormElements/Input/Input";
import Button from "../shared/components/FormElements/Button/Button";
import { REQUIRED, EMAIL } from "../shared/Util/Validator";
import { useForm } from "../shared/hooks/form-hook";
import { thunkLogin } from "./store/thunkAsyncActionCreator";
import { loading } from "../shared/store/actionCreators";

const Login: React.FC = () => {
  const [formState, onInputChange] = useForm(
    {
      email: { id: "email", isValid: false, value: "" },
      password: { id: "password", isValid: false, value: "" },
    },
    false
  );

  const dispatch = useDispatch();

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };
    dispatch(loading());
    dispatch(thunkLogin(credentials));
  };

  return (
    <Card classes="home-card">
      <Title classes="home-title">Login</Title>
      <div className="login-wrapper">
        <form onSubmit={formSubmitHandler}>
          <Input
            id="email"
            onInput={onInputChange}
            classes="customurl"
            validators={[EMAIL(), REQUIRED()]}
            placeholder="email"
            errorMessage="Invalid email"
          >
            Email
          </Input>
          <Input
            id="password"
            onInput={onInputChange}
            classes="customurl"
            validators={[REQUIRED()]}
            placeholder="password"
            errorMessage="Should have least 8 characters"
          >
            Password
          </Input>
          <Button
            classes="shorturl-btn"
            type="submit"
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
