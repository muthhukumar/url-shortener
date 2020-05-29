import React from "react";
import { useDispatch } from "react-redux";

import "./MyURL.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";
import { deleteUrl } from "../../store/actionCreators";

interface Props {
  url: string;
  expiresIn: number;
  shortUrl: string;
  id: string;
}

const MyURL: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const removeUrl = () => dispatch(deleteUrl(props.id));
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
        <Button onClick={removeUrl} classes="myurl-btn" disabled={false}>
          DELETE
        </Button>
      </div>
    </Card>
  );
};

export default MyURL;
