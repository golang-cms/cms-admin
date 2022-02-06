import { DialogContent, TextField } from "@mui/material";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { ClientModel } from "../model/client";

export const formFields = (
  register: UseFormRegister<any>,
  control: Control<any>,
  data?: ClientModel
) => (
  <DialogContent>
    <TextField
      variant="standard"
      autoFocus
      margin="dense"
      id="firstName"
      label="First Name"
      type="text"
      fullWidth
      {...register("firstName")}
      defaultValue={data?.firstName}
    />
    <Controller
      render={({ field }) => (
        <TextField
          variant="standard"
          margin="dense"
          id="lastName"
          label="Last Name"
          type="text"
          fullWidth
          {...field}
        />
      )}
      control={control}
      name="lastName"
      defaultValue={data?.lastName ?? ""}
    />
    <Controller
      render={({ field }) => (
        <TextField
          variant="standard"
          margin="dense"
          id="email"
          label="Email"
          type="text"
          fullWidth
          {...field}
        />
      )}
      control={control}
      name="email"
      defaultValue={data?.email ?? ""}
    />
  </DialogContent>
);
