import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInButton = () => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
