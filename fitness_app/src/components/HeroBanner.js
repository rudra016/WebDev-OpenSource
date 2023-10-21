import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import background from "../assets/images/background.jpg";
import Logo from "../assets/images/Logo.png";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightBlue: createColor('#06daff'),
    darkBlue: createColor('#1d85e8'),
    dullPink: createColor('#b586c7'),
    // violet: createColor('#BC00A3'),
  },
});
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <figure
        className="figure"
        style={{ marginLeft: "90px", marginTop: "-70px" }}
      >
        {/* <img src={Logo}  alt="" sx={{height:{lg:"450px", sm:"200px"},width:{lg:"450px", sm:"200px"}}} /> */}
        <Box component="img" src={Logo} sx={{height:{lg:"450px", sm:"200px", xs:"100px"},width:{lg:"450px", sm:"200px", xs:"100px"}}} />
      </figure>
      <br />
      <Typography
        sx={{

          color: "white",
          fontFamily: "anton",
          fontSize:{ lg: "44px", xs: "15px" } ,
          ml: { lg: "130px", sm: "120px", xs:"80px" },
          mt: { lg: "-20px", sm:"-40px", xs:"-30px" },
        }}
      >
        TRAIN ON YOUR OWN{" "}
      </Typography>
      <Box display="flex" alignItems="center" gap="20px">
        <Typography
          sx={{
            color: "#3fbac2",
            fontFamily: "anton",
            fontSize: {lg:"65px",sm:"30px"},
            ml: { lg: "130px", sm: "120px", xs:"80px" },
            mt: { lg: "-20px" },
          }}
        >
          TIME.
        </Typography>
        <ThemeProvider theme={theme}>
          <Button
          variant="contained"
          // color="lightBlue"
          href="#exercises"
          
          sx={{
            backgroundColor: "darkBlue",
            padding: "10px",
            size:"small",
            borderRadius:"35px",
            fontFamily:"manrope2",
            
            fontSize:"10px"
          }}
        >
          Explore{" "}
        </Button>
        </ThemeProvider>
        
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          color: "white",
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
          ml:"600px",
          mt:"-50px",
         
        }}
      >
        Exercise
      </Typography>
      
      {/* <img src={background} alt="banner" className="hero-banner-img" /> */}
    </Box>
  );
};

export default HeroBanner;
