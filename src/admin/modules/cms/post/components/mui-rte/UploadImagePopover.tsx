import { makeStyles } from "@mui/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Button, Grid, IconButton, Popover, TextField } from "@mui/material";
import { TAsyncAtomicBlockResponse } from "mui-rte";
import { FunctionComponent, useEffect, useState } from "react";

interface IUploadImagePopoverProps {
  anchor: TAnchor;
  onSubmit: (data: TUploadImageData, insert: boolean) => void;
}

type TUploadImagePopoverState = {
  anchor: TAnchor;
  isCancelled: boolean;
};

type TUploadImageData = {
  file?: File;
};

type TAnchor = HTMLElement | null;

const cardPopoverStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    maxWidth: 350,
  },
  textField: {
    width: "100%",
  },
  input: {
    display: "none",
  },
}));

const UploadImagePopover: FunctionComponent<IUploadImagePopoverProps> = (
  props
) => {
  const classes = cardPopoverStyles(props);
  const [state, setState] = useState<TUploadImagePopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<TUploadImageData>({});

  useEffect(() => {
    setState({
      anchor: props.anchor,
      isCancelled: false,
    });
    setData({
      file: undefined,
    });
  }, [props.anchor]);

  const onExited = () => {
    props.onSubmit(data, !state.isCancelled);
  };

  return (
    <Popover
      anchorEl={state.anchor}
      open={state.anchor !== null}
      TransitionProps={{ onExited: onExited }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={10}>
          <TextField
            className={classes.textField}
            disabled
            value={data.file?.name || ""}
            placeholder="Click icon to attach image"
          />
        </Grid>
        <Grid item xs={2}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={(event) => {
              setData({
                ...data,
                file: event.target.files![0],
              });
            }}
          />
          <label htmlFor="contained-button-file">
            <IconButton
              color="primary"
              aria-label="upload image"
              component="span"
            >
              <AttachFileIcon />
            </IconButton>
          </label>
        </Grid>
        <Grid item container xs={12} justifyContent="flex-end">
          <Button
            onClick={() => {
              setState({
                anchor: null,
                isCancelled: true,
              });
            }}
          >
            <CloseIcon />
          </Button>
          <Button
            onClick={() => {
              setState({
                anchor: null,
                isCancelled: false,
              });
            }}
          >
            <DoneIcon />
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export const uploadImageServer = (file: any) => {
  console.log(file);
  return new Promise<TAsyncAtomicBlockResponse>(async (resolve, reject) => {
    resolve({
      data: {
        url: file?.displayUrl,
        src: file?.displayUrl,
        width: file?.width,
        height: file?.height,
        alignment: "left", // or "center", "right"
        type: "image", // or "video"
      },
    });
  });
};
export default UploadImagePopover;

/*
const uploadImage = (file: File) => {
  return new Promise<TAsyncAtomicBlockResponse>(async (resolve, reject) => {
    console.log("upload image", file);
    const url = await uploadImageToServer(file);
    if (!url) {
      reject();
      return;
    }
    resolve({
      data: {
        url: url,
        width: 300,
        height: 200,
        alignment: "left", // or "center", "right"
        type: "image", // or "video"
      },
    });
  });
};

const uploadImageToServer = (file: File) => {
  return new Promise((resolve) => {
    console.log(`Uploading image ${file.name} ...`);
    setTimeout(() => {
      console.log("Upload successful");
      resolve(`https://return_uploaded_image_url/${file.name}`);
    }, 2000);
  });
};
*/
