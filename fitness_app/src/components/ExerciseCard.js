import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography,Box } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Box className="exerciseSection" textAlign="center" >
      <Link className="exercise-card" to={`/exercise/${exercise.id}`} alignContent="center">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row" gap="40px" ml="85px" mb="10px">
          <Button
            sx={{
              
              ml: "21px",
              color: "#fff",
              background: "#3fbac2",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              
              color: "#fff",
              background: "#3fbac2",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          // ml="85px"
          justifyContent="center"
          color="black"
          fontWeight="bolder"
          fontFamily="aquatico"
          mt="15px"
          mb="15px"
          textTransform="capitalize"
          fontSize="15px"
        >
          {exercise.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
