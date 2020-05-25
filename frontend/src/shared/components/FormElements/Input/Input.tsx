import React, { useReducer, useEffect } from "react";

import "./Input.css";
import { validate, EMAIL } from "../../../Util/Validator";

interface VALIDATE_RESULT {
  type: string;
  val?: number;
}

interface InputProps {
  children?: React.ReactNode;
  classes?: "url-input" | "expiresOn" | "customurl" | "toogle-input";
  id: string;
  initialValue?: string;
  placeholder?: string;
  isValid?: boolean;
  validators: VALIDATE_RESULT[];
  onInput: (value: string, id: string, isValid: boolean) => void;
  type?: string;
}

interface Action {
  type: "ONCHANGE" | "ONBLUR";
  validators?: VALIDATE_RESULT[];
  value?: string;
}

interface State {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

const InputReducer: (state: State, action: Action) => State = (
  state,
  action
) => {
  switch (action.type) {
    case "ONCHANGE":
      return {
        ...state,
        value: action.value!,
        isValid: validate([EMAIL()], action.value!),
      };

    case "ONBLUR":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

const Input: React.FC<InputProps> = (props) => {
  const [state, dispatch] = useReducer(InputReducer, {
    value: props.initialValue || "",
    isValid: props.isValid || false,
    isTouched: false,
  });

  const { onInput, id } = props;
  const { value, isValid } = state;

  useEffect(() => {
    onInput(value, id, isValid);
  }, [value, id, isValid, onInput]);

  const onInputChangeEvent: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    dispatch({
      type: "ONCHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const onTouchHandler = () => {
    dispatch({ type: "ONBLUR" });
  };

  return (
    <div className={`input ${props.classes ? props.classes : null}`}>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        onChange={onInputChangeEvent}
        value={state.value}
        id={props.id}
        placeholder={props.placeholder}
        onBlur={onTouchHandler}
        type={props.type}
      />
    </div>
  );
};

export default Input;
