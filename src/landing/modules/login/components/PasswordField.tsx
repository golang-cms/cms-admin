import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { UseFormRegister } from "react-hook-form";
import { LoginModel } from "../model/Login";

const PasswordField = ({
  register,
}: {
  register: UseFormRegister<LoginModel>;
}) => {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        {...register("password")}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </div>
  );
};

export default PasswordField;
