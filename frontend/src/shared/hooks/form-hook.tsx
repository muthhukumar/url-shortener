import { useReducer, useCallback } from "react";

interface Input {
  id: string;
  isValid: boolean;
  value: string;
}

interface initialInput {
  [key: string]: Input;
}

interface State {
  inputs: initialInput;
  isValid: boolean;
}

interface INPUT_CHANGE {
  type: "INPUT_CHANGE";
  id: string;
  value: string;
  isValid: boolean;
}

interface INITIALIZE_VALUE {
  type: "INITIALIZE_VALUE";
  inputs: initialInput;
  isValid: boolean;
}

type ACTION = INITIALIZE_VALUE | INPUT_CHANGE;

type InputChangeFn = (id: string, value: string, isValid: boolean) => void;
type SetDATA = (inputs: initialInput, isValid: boolean) => void;

const FormReducer: (state: State, action: ACTION) => State = (
  state: State,
  action
) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let isValid: boolean = true;
      for (const input in state.inputs) {
        if (action.id === state.inputs[input].id) {
          isValid = isValid && action.isValid;
        } else {
          isValid = isValid && state.inputs[input].isValid;
        }
      }

      return {
        ...state,
        isValid,
        inputs: {
          ...state.inputs,
          [action.id]: {
            isValid: action.isValid,
            value: action.value,
            id: action.id,
          },
        },
      };
    case "INITIALIZE_VALUE":
      return { inputs: action.inputs!, isValid: action.isValid };
  }
};

export const useForm: (
  input: initialInput,
  initialFormValidity: boolean
) => [State, InputChangeFn, SetDATA] = (inputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(FormReducer, {
    inputs: inputs,
    isValid: initialFormValidity || false,
  });

  const onInputChange: InputChangeFn = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value, id, isValid });
  }, []);

  const setData: SetDATA = useCallback((inputs, formValidity) => {
    dispatch({ type: "INITIALIZE_VALUE", inputs, isValid: formValidity });
  }, []);

  return [formState, onInputChange, setData];
};
