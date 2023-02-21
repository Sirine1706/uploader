/** @format */

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { sortTable } from "../../slices/sortSlice";

export default function SortSelect({ files }) {
  const [choice, setChoice] = React.useState("date");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(sortTable(value));
    setChoice(value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: "10rem",
        bgcolor: "#eff0f6",
        border: 0,
        boxShadow: "none",
        borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}>
      <Select
        value={choice}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}>
        <MenuItem value={"date"}>By Date</MenuItem>
        <MenuItem value={"size"}>By Size</MenuItem>
        <MenuItem value={"name"}>By Name</MenuItem>
      </Select>
    </FormControl>
  );
}
