import React from "react";

import "./Home.css";
import Card from "../shared/components/UIElements/Card/Card";
import Title from "../shared/components/UIElements/Title/Title";
import Input from "../shared/components/FormElements/Input/Input";

import { EMAIL, MIN_LENGTH } from "../shared/Util/Validator";
import Button from "../shared/components/FormElements/Button/Button";

const Home: React.FC = () => {
  const onInputHandler: (
    value: string,
    id: string,
    isValid: boolean
  ) => void = (isValid, id, value) => {
    console.log(value, isValid, id);
  };

  const onSubmitHandler: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = () => {};

  return (
    <Card classes="home-card">
      <Title classes="home-title">ShortURL</Title>
      <div className="wrapper">
        <form onSubmit={onSubmitHandler}>
          <Input
            placeholder="Your URL"
            validators={[EMAIL()]}
            id="email"
            onInput={onInputHandler}
            classes="url-input"
          >
            URL
          </Input>
          <Input
            placeholder="URL"
            validators={[MIN_LENGTH(4)]}
            id="customshorturl"
            onInput={onInputHandler}
            classes="customurl"
          >
            CustomUrl
          </Input>
          <Input
            placeholder="hrs"
            validators={[]}
            id="expiresIn"
            onInput={onInputHandler}
            classes="expiresOn"
            type="number"
          >
            ExpiresIn
          </Input>
          <Button onClick={onSubmitHandler} classes="shorturl-btn">
            ShortURL
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Home;
