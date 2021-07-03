import { makeStyles } from "@material-ui/core/styles";
import Emailfield from "./components/EmailField";
import Pagetitle from "./components/PageTitle";
import Passwordfield from "./components/PasswordField";
import Redirectoptions from "./components/RedirectOptions";
import Signinbutton from "./components/SigninButton";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Pagetitle />
      <form className={classes.form} noValidate>
        <Emailfield />
        <Passwordfield />
        <Signinbutton />
        <Redirectoptions />
      </form>
    </div>
  );
};

export default Login;
