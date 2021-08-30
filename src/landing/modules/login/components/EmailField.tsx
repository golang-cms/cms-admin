import TextField from "@material-ui/core/TextField";
import { Path, UseFormRegister } from "react-hook-form";

interface EmailProps<T> {
    register: UseFormRegister<T>;
    path: Path<T>;
}


const EmailField = <T extends unknown>(props: EmailProps<T>) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="username"
      label="Email Address"
      autoComplete="username"
      autoFocus
      {...props.register(props.path)}
    />
  );
};

export default EmailField;
