import TextField from "@material-ui/core/TextField";
import { UseFormRegister } from "react-hook-form";
import { LoginModel } from "../model/Login";

const EmailField = ({
  register,
}: {
  register: UseFormRegister<LoginModel>;
}) => {
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
      {...register("username")}
    />
  );
};

export default EmailField;
