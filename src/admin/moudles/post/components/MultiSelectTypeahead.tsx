import { debounce } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";
import useGetGroupsByTitle from "../../../../hooks/api/group/useGetGroupsByTitle";
import { GroupModel, GroupOmitPost } from "../../group/model/group";
import { PostModel } from "../model/post";

const MultiSelectTypeahead = ({
  post,
  control,
}: {
  post?: PostModel;
  control: Control<PostModel>;
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<GroupModel[]>([]);
  const [inputValue, setInputValue] = useState("");
  const loading = open && options.length === 0;

  const [rows, error] = useGetGroupsByTitle(inputValue);
  console.log(error);

  const onInputChange = debounce((event, value) => {
    console.log("OnInputChange", inputValue, value);
    if (inputValue !== value) {
      setInputValue(value);
      setOptions(rows);
    }
  }, 1500);

  return (
    <div>
      <Controller
        render={(props) => (
          <Autocomplete
            multiple
            id="groups"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            loading={loading}
            options={options}
            value={props.field.value as GroupModel[]}
            getOptionSelected={(option: GroupModel, value: GroupOmitPost) =>
              option.id === value.id
            }
            getOptionLabel={(option: GroupModel) => option.title}
            onInputChange={onInputChange}
            onChange={(_, data) => props.field.onChange(data)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                id="groups"
                label="Groups"
                type="groups"
                placeholder=""
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        )}
        defaultValue={post?.groups as GroupModel[]}
        name="groups"
        control={control}
      />
    </div>
  );
};

export default MultiSelectTypeahead;
