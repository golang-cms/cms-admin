import DataManager from "../../../common/components/DataManager";
import { TableColumn } from "../../../common/model/table";
import { formFields } from "./formFields";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "firstName", label: "First Name", minWidth: 100 },
  { id: "lastName", label: "Last Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "createAt", label: "Create At", minWidth: 100 },
  { id: "updateAt", label: "Update At", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
] as TableColumn[];

const API_URL = `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/clients`;
const HEAD_TITLE = `Clients`;

const Client = () => {
  return (
    <DataManager
      headTitle={HEAD_TITLE}
      apiUrl={API_URL}
      tableColumns={columns}
      formFields={formFields}
    />
  );
};

export default Client;
