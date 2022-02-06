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
import useGet from "../../../../hooks/api/restful/useGet";
import { TableColumn } from "../model/table";

interface Props<DataType> {
  apiUrl: string;
  columns: TableColumn[];
  refetchToggle: boolean;
  setOpenSave: Dispatch<SetStateAction<boolean>>;
  setOpenDelete: Dispatch<SetStateAction<boolean>>;
  setDialogData: Dispatch<SetStateAction<DataType>>;
}

const DataTable = <DataType extends unknown>(props: Props<DataType>) => {
  const {
    apiUrl,
    refetchToggle,
    setOpenSave,
    setOpenDelete,
    setDialogData,
    columns,
  } = props;
  const [apiData, err] = useGet(apiUrl, refetchToggle);
  console.log("fetch data err ", err);
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>{tableHeadRow(columns)}</TableHead>
          <TableBody>
            {tableDataRow(
              columns,
              apiData,
              setOpenSave,
              setOpenDelete,
              setDialogData
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const tableDataRow = <DataType extends unknown>(
  columns: TableColumn[],
  rows: DataType[],
  setOpenSave: Dispatch<SetStateAction<boolean>>,
  setOpenDelete: Dispatch<SetStateAction<boolean>>,
  setDialogData: Dispatch<SetStateAction<DataType>>
) => {
  return rows !== null ? (
    rows.map((row: DataType, index: number) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
        {columns.map((column) => (
          <TableCell key={column.id}>
            {column.id === "actions"
              ? actionButtons(row, setOpenSave, setOpenDelete, setDialogData)
              : _.get(row, column.id)}
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

const actionButtons = <DataType extends unknown>(
  row: DataType,
  setOpenSave: Dispatch<SetStateAction<boolean>>,
  setOpenDelete: Dispatch<SetStateAction<boolean>>,
  setDialogData: Dispatch<SetStateAction<DataType>>
) => (
  <div>
    <Button
      color="secondary"
      variant="contained"
      onClick={() => {
        setOpenSave(true);
        setDialogData(row);
      }}
    >
      Edit
    </Button>
    <Button
      color="warning"
      variant="contained"
      onClick={() => {
        setOpenDelete(true);
        setDialogData(row);
      }}
    >
      Delete
    </Button>
  </div>
);

const tableHeadRow = (columns: TableColumn[]) => (
  <TableRow>
    {columns.map((column) => (
      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
        {column.label}
      </TableCell>
    ))}
  </TableRow>
);

export default DataTable;
