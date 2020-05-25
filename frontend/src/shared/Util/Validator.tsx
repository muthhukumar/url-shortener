type VALIDATOR = "REQUIRED" | "EMAIL" | "MIN_LENGTH" | "MAX_LENGTH";

interface VALIDATE_RESULT {
  type: VALIDATOR;
  val?: number;
}

type VALIDATE_FUNC = (val?: number) => VALIDATE_RESULT;

type VALIDATOR_FUNC = (
  validations: VALIDATE_RESULT[],
  value: string
) => boolean;

//const REQUIRED_VALIDATOR: Readonly<VALIDATOR> = "REQUIRED";
const REQUIRED_VALIDATOR: VALIDATOR = "REQUIRED";
const EMAIL_VALIDATOR: VALIDATOR = "EMAIL";
const MIN_LENGTH_VALIDATOR: VALIDATOR = "MIN_LENGTH";
const MAX_LENGTH_VALIDATOR: VALIDATOR = "MAX_LENGTH";

export const EMAIL: VALIDATE_FUNC = () => ({ type: EMAIL_VALIDATOR });
export const REQUIRED: VALIDATE_FUNC = () => ({
  type: REQUIRED_VALIDATOR,
});
export const MIN_LENGTH: VALIDATE_FUNC = (val) => ({
  type: MIN_LENGTH_VALIDATOR,
  val,
});

export const MAX_LENGTH: VALIDATE_FUNC = (val) => ({
  type: MAX_LENGTH_VALIDATOR,
  val,
});

export const validate: VALIDATOR_FUNC = (validations, value) => {
  let isValid = true;
  for (const v of validations) {
    if (v.type === REQUIRED_VALIDATOR) {
      isValid = isValid && value.trim().length > 0;
    }
    if (v.type === EMAIL_VALIDATOR) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (v.type === MIN_LENGTH_VALIDATOR) {
      isValid = isValid && value.trim().length >= v.val!;
    }
    if (v.type === MAX_LENGTH_VALIDATOR) {
      isValid = isValid && value.trim().length <= v.val!;
    }
  }

  return isValid;
};
