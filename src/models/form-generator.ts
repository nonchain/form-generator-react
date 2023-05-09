export type FormGeneratorInput = {
  width: "full" | "normal";
  id: string;
  name: string;
  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  placeholder: string;
};

export type InputWidth = {
  full: number;
  normal: number;
}

export type FormGeneratorProps = {
  jsonFile: FormGeneratorInput[];
};
