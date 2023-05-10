export type FormProps = {
  children: JSX.Element[] | JSX.Element,
  onSubmit?: (event: React.ChangeEvent<HTMLFormElement>)=> void;
  id?: string;
  name?: string;
}