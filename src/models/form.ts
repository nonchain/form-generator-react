export type FormProps = {
  children: JSX.Element[] | JSX.Element,
  onSubmit?: ()=> void;
  id?: string;
  name?: string;
}