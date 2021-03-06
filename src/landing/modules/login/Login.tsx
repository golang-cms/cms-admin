import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useGetToken from "../../../hooks/api/keycloak/useGetToken";
import { TokenContext } from "../../../providers/token/TokenProvider";
import EmailField from "./components/EmailField";
import PageTitle from "./components/PageTitle";
import PasswordField from "./components/PasswordField";
import RedirectOptions from "./components/RedirectOptions";
import SignInButton from "./components/SigninButton";
import { LoginModel } from "./model/Login";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = useState<LoginModel>();
  const [access, error] = useGetToken(login);
  const [token, setToken] = useContext(TokenContext);
  console.log(access, error);
  const { register, handleSubmit, watch } = useForm<LoginModel>();
  const onSubmit = (submitLogin: LoginModel) => {
    console.log(submitLogin, token);
    setLogin(submitLogin);
  };

  useEffect(() => {
    setToken(access);
  }, [access, setToken]);

  console.log(watch("username"));

  return (
    <div>
      <PageTitle />
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailField register={register} path={"username"} />
        <PasswordField register={register} />
        <SignInButton />
        <RedirectOptions />
      </form>
    </div>
  );
};

export default Login;
