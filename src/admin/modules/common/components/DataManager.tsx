import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { IdBasedModel } from "../model/idBase";
import { TableColumn } from "../model/table";
import { onClose } from "../restful/dialog";
import { DataTransformType } from "../restful/form";
import DataTable from "./DataTable";
import DeleteDialog from "./dialog/DeleteDialog";
import FormDialog, { FormFields } from "./dialog/FormDialog";

interface Props<DataType, IdType> {
  headTitle: string;
  apiUrl: string;
  tableColumns: TableColumn[];
  formFields: FormFields<DataType>;
  dataTransform?: DataTransformType<FieldValues, DataType, IdType>;
}

const DataManager = <
  DataType extends IdBasedModel<IdType>,
  IdType extends unknown
>(
  props: Props<DataType, IdType>
) => {
  const { headTitle, apiUrl, formFields, tableColumns, dataTransform } = props;
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [dialogData, setDialogData] = useState<DataType>();

  return (
    <Grid container gap={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenSave(true)}
      >
        Create
      </Button>
      <FormDialog
        fullscreen={false}
        headTitle={headTitle}
        apiUrl={apiUrl}
        open={openSave}
        onClose={onClose(
          setOpenSave,
          setOpenDelete,
          refetchToggle,
          setRefetchToggle,
          setDialogData
        )}
        formFields={formFields}
        data={dialogData}
        dataTransform={dataTransform}
      />
      <DeleteDialog
        headTitle={headTitle}
        apiUrl={apiUrl}
        open={openDelete}
        onClose={onClose(
          setOpenSave,
          setOpenDelete,
          refetchToggle,
          setRefetchToggle,
          setDialogData
        )}
        data={dialogData}
      />
      <Grid item xs={12}>
        <DataTable
          apiUrl={apiUrl}
          columns={tableColumns}
          refetchToggle={refetchToggle}
          setOpenSave={setOpenSave}
          setOpenDelete={setOpenDelete}
          setDialogData={setDialogData}
        />
      </Grid>
    </Grid>
  );
};

export default DataManager;
