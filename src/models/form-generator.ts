import { ValidationRule } from "react-hook-form";

export type FormGeneratorInput = {
  width: "full" | "normal";
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
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
};

export type FormGeneratorRadio = {
  id: string;
  name: string;
  value: string;
  title: string;
};

export type InputWidth = {
  full: number;
  normal: number;
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
