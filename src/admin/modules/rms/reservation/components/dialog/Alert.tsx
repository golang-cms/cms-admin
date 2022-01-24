import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertColor, Fade, IconButton } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";

interface AlertProps {
  setError: Dispatch<any | undefined>;
  error: any | undefined;
}

const AlertBox = (props: AlertProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props.error) {
      setOpen(true);
    }
  }, [props, setOpen]);

  let severity: AlertColor = "info";
  switch (props?.error?.status) {
    case 400:
      severity = "warning";
      break;
    case 500:
      severity = "error";
      break;
    default:
      break;
  }

  return (
    <>
      {props.error ? (
        <Fade in={open} timeout={4000}>
          <Alert
            severity={severity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                  props.setError(undefined);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {props?.error?.message ?? ""}
          </Alert>
        </Fade>
      ) : (
        ""
      )}
    </>
  );
};

export default AlertBox;
