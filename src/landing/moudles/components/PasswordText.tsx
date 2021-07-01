import Textfield from "@material-ui/core/TextField";

const PasswordText = () => {
  return (
    <Textfield
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  );
};

export default PasswordText;
