import { Button } from "@mui/material";


const SignInButton = () => {

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
