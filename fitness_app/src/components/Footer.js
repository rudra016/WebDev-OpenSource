import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import navbarPic from "C:/GITHUB/projects/fitness_app/src/assets/icons/navbarPic.png";
// import { LinkedIn } from "@material-ui/icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
// import {GitHubIcon,EmailIcon,LinkedInIcon} from "@material-ui/icons/Search";

const Footer = () => (
  <Box mt="80px" backgroundColor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={navbarPic}
        alt="logo"
        style={{ width: "200px", height: "200px" }}
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "20px", xs: "8px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      gap="40px"
      fontFamily="anton"
    >
      Connect with me @
      <IconButton href="https://github.com/codrrk08" target="_blank">
        <GitHubIcon />
      </IconButton>
      <IconButton href="mailto:risshi.kudeshia@gmail.com">
        <EmailIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/risshi-kudeshia0809/">
        <LinkedInIcon />
      </IconButton>
    </Typography>
  </Box>
);

export default Footer;
