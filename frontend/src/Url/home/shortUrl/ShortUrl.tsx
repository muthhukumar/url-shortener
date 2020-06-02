import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ShortUrl.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Title from "../../../shared/components/UIElements/Title/Title";
import Input from "../../../shared/components/FormElements/Input/Input";
import { MIN_LENGTH, REQUIRED } from "../../../shared/Util/Validator";
import Button from "../../../shared/components/FormElements/Button/Button";
import { useForm } from "../../../shared/hooks/form-hook";
import { RootState } from "../../../shared/store/index";
import { thunkNewURL } from "../.././store/thunkAsyncActionCreators";
import createDate from "../../../shared/Util/createDate";
import { loading } from "../../../shared/store/actionCreators";

const Home: React.FC = () => {
  const [formState, onInputChange] = useForm(
    {
      url: { id: "url", value: "", isValid: false },
      customshorturl: { id: "customshorturl", value: "", isValid: false },
      expiresIn: { id: "expiresIn", value: "", isValid: false },
    },
    false
  );
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });

  const onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    const newUrl = {
      url: formState.inputs.url.value,
      expiresOn: createDate(+formState.inputs.expiresIn.value),
      customUrl: formState.inputs.customshorturl.value,
      _id: "",
    };
    dispatch(loading());
    dispatch(thunkNewURL(newUrl, token));
  };

  return (
    <Card classes="home-card">
      <Title classes="home-title">ShortURL</Title>
      <div className="wrapper">
        <form onSubmit={onSubmitHandler}>
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
            validators={[MIN_LENGTH(4)]}
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
            min={1}
            max={365}
            classes="expiresIn"
            type="number"
            errorMessage="Select value"
          >
            ExpiresIn
          </Input>
          <Button
            type="submit"
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
