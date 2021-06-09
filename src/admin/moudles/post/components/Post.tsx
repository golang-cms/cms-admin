import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,

    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import usePosts from "../../../../hooks/usePosts";
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={3}>
      Post page
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Create Post</Button>
      <PostDialog open={open} onClose={handleClose} />
      <Grid item xs={12}>
        <PostsTable />
      </Grid>
    </Grid>
  );
};

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "content", label: "Title", minWidth: 100 },
];

const PostsTable = () => {
  const classes = useStyles();
  const [rows, error] = usePosts();
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
            {rows !== null
              ? rows.map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row['id']}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })
              : <TableRow><TableCell key="NO_DATA">NO Data</TableCell></TableRow>
        }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Post;
