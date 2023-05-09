// TS Configs
import { FormProps } from "../../models/form";

function Form({ children, name, id, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} id={id} name={name}>
      {children}
    </form>
  )
}

export default Form;