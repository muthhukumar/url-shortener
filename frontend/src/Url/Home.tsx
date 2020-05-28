import React from "react";

import "./Home.css";
import Card from "../shared/components/UIElements/Card/Card";
import Title from "../shared/components/UIElements/Title/Title";
import Input from "../shared/components/FormElements/Input/Input";
import { MIN_LENGTH, REQUIRED } from "../shared/Util/Validator";
import Button from "../shared/components/FormElements/Button/Button";
import { useForm } from "../shared/hooks/form-hook";

const Home: React.FC = () => {
  const [formState, onInputChange] = useForm(
    {
      url: { id: "url", value: "", isValid: false },
      customshorturl: { id: "customshorturl", value: "", isValid: false },
      expiresIn: { id: "expiresIn", value: "", isValid: false },
    },
    false
  );

  const onSubmitHandler: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = () => {};

  return (
    <Card classes="home-card">
      <Title classes="home-title">ShortURL</Title>
      <div className="wrapper">
        <form>
          <Input
            placeholder="Your URL"
            validators={[REQUIRED()]}
            id="url"
            onInput={onInputChange}
            classes="url-input"
            errorMessage="Invalid URL"
          >
            URL
          </Input>
          <Input
            placeholder="URL"
            validators={[MIN_LENGTH(4), REQUIRED()]}
            id="customshorturl"
            onInput={onInputChange}
            classes="customurl"
            errorMessage="Should have least 5 characters"
          >
            CustomUrl
          </Input>
          <Input
            placeholder="hrs"
            validators={[]}
            id="expiresIn"
            onInput={onInputChange}
            classes="expiresIn"
            type="number"
            errorMessage="Select value"
          >
            ExpiresIn
          </Input>
          <Button
            onClick={onSubmitHandler}
            classes="shorturl-btn"
            disabled={!formState.isValid}
          >
            ShortURL
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Home;
