import { Avatar, Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const PageTitle = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    </Box>
  );
};

export default PageTitle;
