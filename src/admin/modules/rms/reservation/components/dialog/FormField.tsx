import { DateTimePicker } from "@mui/lab";
import { DialogContent, TextField } from "@mui/material";
import React from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { formatter, ReservationModel } from "../../model/reservation";

interface FormFieldProps {
  reservation?: ReservationModel;
  register: UseFormRegister<any>;
  control: Control<any>;
}
const FormFields = (props: FormFieldProps) => {
  const { reservation, register, control } = props;

  return (
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
        defaultValue={reservation?.title}
      />

      <Controller
        render={({ field }) => (
          <DateTimePicker
            label="Start Date Time"
            inputFormat={formatter}
            showToolbar
            showTodayButton
            // onChange={handleChange}
            renderInput={(params) => (
              <TextField
                margin="dense"
                fullWidth
                {...params}
                type="datetime-local"
                variant="standard"
              />
            )}
            {...field}
          />
        )}
        control={control}
        name="start"
        defaultValue={reservation?.start}
      />
      <Controller
        render={({ field }) => (
          <DateTimePicker
            label="End Date Time"
            inputFormat={formatter}
            showToolbar
            showTodayButton
            renderInput={(params) => (
              <TextField
                margin="dense"
                fullWidth
                {...params}
                type="datetime-local"
                variant="standard"
              />
            )}
            {...field}
          />
        )}
        control={control}
        name="end"
        defaultValue={reservation?.end}
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
            rows={3}
            //defaultValue={reservation?.id ?? "hello"}
            {...field}
          />
        )}
        control={control}
        name="description"
        defaultValue={reservation?.description ?? ""}
      />
    </DialogContent>
  );
};

export default FormFields;
