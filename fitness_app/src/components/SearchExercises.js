import { useEffect, useState } from "react";
import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { exerciseOptions, fetchData } from "../utils/fetchData.js";
import HorizontalScrollbar from "./HorizontalScrollbar.js";
import { createTheme } from "@mui/material/styles";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    //displays all body parts on initial render
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    //whenever the search button is clicked
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10",
        exerciseOptions
      ); //exerciseOptions authorize us to make the request the since we've added the api key.
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
        // item.secondaryMuscles.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      lightBlue: createColor("#06daff"),
      darkBlue: createColor("#1d85e8"),
      dullPink: createColor("#b586c7"),
      black: createColor("#000000"),
      // violet: createColor('#BC00A3'),
    },
  });
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          fontFamily: "anton",
          color: "black",
        }}
        mb="50px"
        textAlign="center"
      >
        AWESOME EXERCISES FOR{" "}
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "35px", xs: "25px" },
            fontFamily: "anton",
            color: "#3fbac2",
          }}
          mb="50px"
          textAlign="center"
          w
        >
          EVERYONE.
        </Typography>
      </Typography>
      <Box position="relative" mb="72px">
        <ThemeProvider theme={theme}>
          <TextField
            label="Search Exercises"
            variant="filled"
            color="black"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "white",
              borderRadius: "40px",
              border: "none",
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            // placeholder="Search Exercises"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </ThemeProvider>
        {/* <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton> */}
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
