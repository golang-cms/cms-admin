import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AdminBasePath } from "../../../../admin/moudles/Routes";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signinbutton = () => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      href={AdminBasePath}
    >
      Sign In
    </Button>
  );
};

export default Signinbutton;
