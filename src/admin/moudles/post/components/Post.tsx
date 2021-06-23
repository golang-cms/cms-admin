import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import React from "react";
import useGetPosts from "../../../../hooks/post/useGetPosts";
import { PostModel } from "../model/post";
import PostDialog from "./PostDialog";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const Post = () => {
  const [open, setOpen] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [data, setData] = React.useState<PostModel>();
  const handleClickOpen = (data?: PostModel) => {
    setOpen(true);
    // setSaved(false);
    if (data) {
      setData(data);
    }
  };

  const handleClose = () => {
    console.log("close dialog");
    setOpen(false);
    setData(undefined);
    setSaved(!saved);
  };

  return (
    <Grid container spacing={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClickOpen()}
      >
        Create Post
      </Button>
      <PostDialog open={open} onClose={handleClose} data={data} />
      <Grid item xs={12}>
        <PostsTable updated={saved} handleClickOpen={handleClickOpen} />
      </Grid>
    </Grid>
  );
};

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 100 },
  { id: "slug", label: "Slug", minWidth: 100 },
  { id: "createAt", label: "Create At", minWidth: 100 },
  { id: "updateAt", label: "Update At", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

const PostsTable = ({
  updated,
  handleClickOpen,
}: {
  updated: boolean;
  handleClickOpen: (data?: PostModel) => void;
}) => {
  const classes = useStyles();
  const [rows, error] = useGetPosts(updated);
  if (error !== null) {
    console.log(error);
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* rows !== null
              ? rows.map((row: any) => {
                  return <div>{row["id"]}{row["content"]}</div>;
                })
            : "" */}
            {rows !== null ? (
              rows.map((row: PostModel) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row["id"]}>
                    {columns.map((column) => {
                      const value =
                        column.id === "actions" ? (
                          <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => handleClickOpen(row)}
                          >
                            Edit
                          </Button>
                        ) : (
                          _.get(row, column.id)
                        );
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell key="NO_DATA">NO Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Post;
