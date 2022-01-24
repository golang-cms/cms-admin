import { Box, Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
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
