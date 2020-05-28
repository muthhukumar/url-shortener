import React, { useReducer, useEffect } from "react";

import "./Input.css";

import { validate } from "../../../Util/Validator";

type VALIDATOR = "REQUIRED" | "EMAIL" | "MIN_LENGTH" | "MAX_LENGTH";

interface VALIDATE_RESULT {
  type: VALIDATOR;
  val?: number;
}

interface InputProps {
  children?: React.ReactNode;
  classes?: "url-input" | "expiresIn" | "customurl" | "toogle-input";
  id: string;
  initialValue?: string;
  placeholder?: string;
  isValid?: boolean;
  validators: VALIDATE_RESULT[];
  onInput: (value: string, id: string, isValid: boolean) => void;
  type?: string;
  errorMessage: string;
}

interface ON_CHANGE {
  type: "ONCHANGE";
  validators: VALIDATE_RESULT[];
  value: string;
}

interface ON_BLUR {
  type: "ONBLUR";
}

type Action = ON_CHANGE | ON_BLUR;

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
        isValid: validate(action.validators, action.value),
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
    onInput(id, value, isValid);
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
    dispatch({
      type: "ONBLUR",
    });
  };

  return (
    <div
      className={`input ${props.classes ? props.classes : null} ${
        !state.isValid && state.isTouched ? "invalid-input" : null
      }`}
    >
      <label htmlFor={props.id}>
        {!state.isValid && state.isTouched
          ? props.errorMessage
          : props.children}
      </label>
      <input
        onChange={onInputChangeEvent}
        value={state.value}
        id={props.id}
        placeholder={props.placeholder}
        onBlur={onTouchHandler}
        type={props.type}
      />
      {state.isValid}
    </div>
  );
};

export default Input;
