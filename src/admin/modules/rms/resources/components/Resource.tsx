import DataManager from "../../../common/components/DataManager";
import { TableColumn } from "../../../common/model/table";
import { formFields } from "./formFields";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 100 },
  { id: "createAt", label: "Create At", minWidth: 100 },
  { id: "updateAt", label: "Update At", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
] as TableColumn[];

const API_URL = `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/resources`;
const HEAD_TITLE = `Resources`;

const Resource = () => {
  return (
    <DataManager
      headTitle={HEAD_TITLE}
      apiUrl={API_URL}
      tableColumns={columns}
      formFields={formFields}
    />
  );
};

/*
const Resource = () => {
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [dialogData, setDialogData] = useState<ResourceModel>();

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
        headTitle={HEAD_TITLE}
        apiUrl={API_URL}
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
      />
      <DeleteDialog
        apiUrl={API_URL}
        headTitle={HEAD_TITLE}
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
          apiUrl={API_URL}
          columns={columns}
          refetchToggle={refetchToggle}
          setOpenSave={setOpenSave}
          setOpenDelete={setOpenDelete}
          setDialogData={setDialogData}
        />
      </Grid>
    </Grid>
  );
};
*/
export default Resource;
