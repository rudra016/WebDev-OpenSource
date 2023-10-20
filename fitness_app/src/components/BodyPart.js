import React from "react";
import { Stack, Typography} from "@mui/material";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  //   const muscleName = item.name;
  return (
    // <div>BodyPart</div>
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800, left:100, behavior:'smooth'})

      }}
    >
      <img
        src={`/muscles/${item}.jpg`}
        alt="muscleImage"
        style={{ width: "110px", height: "110px", borderRadius: "60px" }}
      />
      <Typography
        fontSize="15px"
        fontWeight="bold"
        fontFamily="aquatico"
        color="black"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
