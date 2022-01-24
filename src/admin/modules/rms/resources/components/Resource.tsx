import { Button, Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { ResourceModel } from "../model/resource";
import ResourceTable from "./ResourceTable";

const Resource = () => {
  const [fetch, setFetch] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const [updateData, setUpdateData] = useState<ResourceModel>();

  return (
    <Grid container gap={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenSave(true)}
      >
        Create
      </Button>
      {/*
      <PostDialog open={open} onClose={handleClose} data={data} />
      <DeleteDialog open={openDelete} onClose={handleClose} data={data} />
      */}
      <Grid item xs={12}>
        <ResourceTable fetch={fetch} setOpenSave={setOpenSave} />
      </Grid>
    </Grid>
  );
};

export default Resource;
