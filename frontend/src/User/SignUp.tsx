import React from "react";

import "./SignUp.css";
import Card from "../shared/components/UIElements/Card/Card";
import Title from "../shared/components/UIElements/Title/Title";
import Input from "../shared/components/FormElements/Input/Input";
import Button from "../shared/components/FormElements/Button/Button";
import { REQUIRED, MIN_LENGTH, EMAIL } from "../shared/Util/Validator";
import { useForm } from "../shared/hooks/form-hook";

const SignUp: React.FC = () => {
  const [formState, onInputChange] = useForm(
    {
      name: { id: "name", isValid: false, value: "" },
      email: { id: "email", isValid: false, value: "" },
      password: { id: "password", isValid: false, value: "" },
    },
    false
  );
  return (
    <Card classes="home-card">
      <Title classes="home-title">SignUp</Title>
      <div className="signup-wrapper">
        <form>
          <Input
            id="name"
            onInput={onInputChange}
            classes="customurl"
            validators={[MIN_LENGTH(3), REQUIRED()]}
            placeholder="name"
            errorMessage="Should have least 3 characters"
          >
            username
          </Input>
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
            validators={[MIN_LENGTH(8), REQUIRED()]}
            placeholder="password"
            errorMessage="Should have least 8 characters"
          >
            Password
          </Input>
          <Button
            onClick={() => {}}
            classes="shorturl-btn"
            disabled={!formState.isValid}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SignUp;
