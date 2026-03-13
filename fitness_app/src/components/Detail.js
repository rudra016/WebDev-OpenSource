import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; //object destructuring
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Box className="exercisesPage" >
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { lg: "64px", xs: "30px" } }}
            
            fontFamily="anton"
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <Typography variant="h7" fontFamily="manrope">
            Exercises keep you strong.
            <span style={{ textTransform: "capitalize" }}>
              {name}
            </span> {` `} is one of the best <br /> exercises to target your{" "}
            {target}. It will help you improve your <br /> mood and gain energy.
          </Typography>
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                fontFamily="manrope"
                sx={{ fontSize: { lg: "20px", xs: "10px" } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Detail;
