import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import _ from "lodash";
import { Dispatch, SetStateAction } from "react";
import useGetResources from "../../../../../hooks/api/rms/resource/useGetResources";
import { ResourceModel } from "../model/resource";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 100 },
  { id: "createAt", label: "Create At", minWidth: 100 },
  { id: "updateAt", label: "Update At", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

interface Props {
  fetch: boolean;
  setOpenSave: Dispatch<SetStateAction<boolean>>;
}

const ResourceTable = (props: Props) => {
  const { fetch } = props;
  const [resources, err] = useGetResources(fetch);
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>{tableHeadRow}</TableHead>
          <TableBody>{tableDataRow(resources)}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const tableDataRow = (resources: ResourceModel[]) => {
  return resources !== null ? (
    resources.map((row: ResourceModel) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={row["id"]}>
        {columns.map((column) => (
          <TableCell key={column.id}>
            {column.id === "actions" ? (
              actionButtons(row)
            ) : (
              _.get(row, column.id)
            )}
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell key="NO_DATA">NO Data</TableCell>
    </TableRow>
  );
};

const actionButtons = ( row: ResourceModel ) => {
    <div>
      <Button color="secondary" variant="contained" onClick={() => {}}>
        Edit
      </Button>
      <Button color="warning" variant="contained" onClick={() => {}}>
        Delete
      </Button>
    </div>
};

const tableHeadRow = (
  <TableRow>
    {columns.map((column) => (
      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
        {column.label}
      </TableCell>
    ))}
  </TableRow>
);

export default ResourceTable;
