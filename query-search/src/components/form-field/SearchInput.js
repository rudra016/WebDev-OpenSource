import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, search_word } from "../../redux/actions";

export default function SearchInput() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.data);

  const [value, setValue] = React.useState("");

  const handleSubmit = (event) => {
    dispatch(search_word(value.trim()));
    if (value.trim()) dispatch(fetchData());
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        mt: "10px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        value={value}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1, height: 2 }}
        placeholder="Enter you query:(artist, album, song)"
        inputProps={{ "aria-label": "enter your query" }}
        disabled={loading}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
