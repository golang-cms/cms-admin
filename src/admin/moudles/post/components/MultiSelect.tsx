import { Select, Input, Chip, MenuItem } from "@material-ui/core";
import { useState } from "react";

const MultiSelect = () => {
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
      const [displayValue, setDisplayValue] = useState<string[]>([]);

      const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDisplayValue(event.target.value as string[]);
      };
  return (
    <Select
      labelId="demo-mutiple-chip-label"
      id="demo-mutiple-chip"
      multiple
      onChange={handleChange}
      value={displayValue}
      input={<Input id="select-multiple-chip" />}
      renderValue={(selected) => (
        <div>
          {(selected as string[]).map((value) => (
            <Chip key={value} label={value} />
          ))}
        </div>
      )}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};
export default MultiSelect;
