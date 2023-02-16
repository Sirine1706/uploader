import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect({files}) {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    const value = event.target.value
    if (value === "date") {
      // sort by date
    } else if (value === "size") {
      // sort by size
    } else {
     // sort by day 
    }
    // dispatch an action to reset the fileList
    setAge(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: "10rem", 
      bgcolor: '#eff0f6',  border: 0, boxShadow: 'none',borderRadius: '8px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value={10}>By Date</MenuItem>
          <MenuItem value={20}>By Size</MenuItem>
          <MenuItem value={30}>By Day</MenuItem>
        </Select>
      </FormControl>
  );
}
