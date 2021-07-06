import TextField from "@material-ui/core/TextField";

const Emailfield = () => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
  );
};

export default Emailfield;
