import { ValidationRule } from "react-hook-form";

export type FormGeneratorInput = {
  width: string;
  id: string;
  name: string;
  placeholder: string;
  title: string;
  validation?: {
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
    valueAsNumber?: false | undefined;
    minLength?: ValidationRule<number> | undefined;
    maxLength?: ValidationRule<number> | undefined;
  };
  type: string;
};

export type FormGeneratorRadio = {
  id: string;
  name: string;
  value: string;
  title: string;
};

export type InputWidth = {
  [key: string]: number
};

export type FormGeneratorProps = {
  jsonFile: {
    inputs: FormGeneratorInput[];
    radios: {
      groups: {
        [key: string]: {
          id: string;
          title: string;
          data: FormGeneratorRadio[];
        };
      };
    };
  };
};
