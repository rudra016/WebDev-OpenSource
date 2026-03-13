import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff"
      }
    }
  }));
  
  // console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const handlePagination = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  };
  useEffect(() => {     //fetches the exercises according to change in bodyPart on the Horizontal Scrollbar
    const fetchExercisesData = async () => { //async function to fetch the exercises
      let exercisesData = [];

      if (bodyPart === "all") {              
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=10",  //all exercises
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10`, //exercises acc. to the bodyPart selected
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData(); //calling the function

  }, [bodyPart]); //dependency array that triggers the useEffect when the bodyPart changes
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" color="black" fontFamily="anton" fontSize="35px" textAlign="center" fontWeight="700">
        SHOWING RESULTS:
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" }, pt:"10px"}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">

        {exercises.length > 9 && (

          <Pagination
            color="primary"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={handlePagination} //(e)=>handlePagination(e,value) BTS
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
