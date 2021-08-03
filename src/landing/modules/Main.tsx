import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Copyright from "../../admin/modules/common/components/CopyRight";
import Login from "./login/Login";

const Main = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Login />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Main;
