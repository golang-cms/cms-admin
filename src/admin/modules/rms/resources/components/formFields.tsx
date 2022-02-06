import { DialogContent, TextField } from "@mui/material";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { ResourceModel } from "../model/resource";

export const formFields = (
  register: UseFormRegister<any>,
  control: Control<any>,
  data?: ResourceModel
) => (
  <DialogContent>
    <TextField
      variant="standard"
      autoFocus
      margin="dense"
      id="title"
      label="Title"
      type="text"
      fullWidth
      {...register("title")}
      defaultValue={data?.title}
    />
    <Controller
      render={({ field }) => (
        <TextField
          variant="standard"
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={8}
          {...field}
        />
      )}
      control={control}
      name="description"
      defaultValue={data?.description ?? ""}
    />
  </DialogContent>
);
