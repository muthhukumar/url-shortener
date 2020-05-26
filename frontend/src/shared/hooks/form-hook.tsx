import React, { useReducer, useCallback } from "react";

interface Input {
  id: string;
  isValid: boolean;
  value: string;
}

interface initialInput {
  [key: string]: Input;
}

const check: initialInput = {
  email: {
    isValid: false,
    value: "",
    id: "valid id",
  },
  password: {
    isValid: false,
    value: "",
    id: "password",
  },
};

interface State {
  inputs: initialInput;

  isValid: boolean;
}

interface Action {
  type: "INPUT_CHANGE" | "INITIALIZE_VALUE";
}

const FormReducer: (state: State, action: Action) => State = (
  state: State,
  action
) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return state;
    case "INITIALIZE_VALUE":
      return state;
  }
};

export const useForm: (
  input: initialInput,
  initialFormValidity: boolean
) => void = (input, initialFormValidity) => {
  const [formState, setFormState] = useReducer(FormReducer, {
    inputs: input,
    isValid: initialFormValidity || false,
  });
  


};
