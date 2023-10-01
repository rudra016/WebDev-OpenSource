import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.data);

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(filter(event.target.value));
  };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 240, maxHeight: 2 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">Filter by:</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label="Filter by:"
          onChange={handleChange}
          style={{ background: "#fff" }}
          disabled={loading}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="artistTerm">Artiste</MenuItem>
          <MenuItem value="albumTerm">Album</MenuItem>
          <MenuItem value="songTerm">Song</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
