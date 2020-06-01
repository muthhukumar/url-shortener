import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MyURL.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";
import { thunkDeleteUrl } from "../../store/thunkAsyncActionCreators";
import { RootState } from "../../../shared/store/index";
import { loading } from "../../../shared/store/actionCreators";
import { createNewUrl } from "../../store/actionCreators";

interface Props {
  url: string;
  expiresIn: string;
  shortUrl: string;
  id: string;
  action: "DELETE" | "NEW";
}

const MyURL: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });
  const onClickActionHandler = () => {
    if (props.action === "DELETE") {
      return (
        dispatch(loading()),
        dispatch(thunkDeleteUrl(props.shortUrl, props.id, token))
      );
    }
    dispatch(createNewUrl());
  };
  return (
    <Card classes="myurls">
      <div className="myurl-wrapper">
        <div className="myurl-container url-w">
          <label htmlFor="url">URL</label>
          <div>{props.url}</div>
        </div>
        <div className="myurl-container expiresIn-w">
          <label htmlFor="expiresIn">ExpiresIn</label>
          <div>{props.expiresIn}</div>
        </div>
        <div className="myurl-container shorturl-w">
          <label htmlFor="shorturl">ShortURL</label>
          <div>{props.shortUrl}</div>
        </div>
        <Button
          onClick={onClickActionHandler}
          classes="myurl-btn"
          disabled={false}
        >
          {props.action}
        </Button>
      </div>
    </Card>
  );
};

export default MyURL;
