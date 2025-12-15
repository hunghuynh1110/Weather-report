import { Box, Typography } from "@mui/material";
import React from "react";
import BackGroundLarge from "../assets/images/bg-today-large.svg";
import IconSunny from "../assets/images/icon-sunny.webp";
import { appBoxSx } from "./AppBox";

function TodayCard() {
  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "10px",
        height: 250,
        backgroundImage: `url(${BackGroundLarge})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", // fills the box, may crop a bit

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4">Berlin, Germany</Typography>
        <Typography variant="subtitle1">Tuesday, Aug 8 2025</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Box
          component="img"
          src={IconSunny}
          alt="Sunny"
          sx={{ width: 130, height: 130 }}
        />
        <Typography variant="h1" fontStyle="italic">
          20°
        </Typography>
      </Box>
    </Box>
  );
}

function AtributeCard() {
  return (
    <Box sx={{ ...appBoxSx, height: "80px", flex: 1, alignContent: "center" }}>
      <Typography variant="subtitle1">Feels like</Typography>
      <Typography variant="h6">50%</Typography>
    </Box>
  );
}

function TodayAtributes() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <AtributeCard />
      <AtributeCard />
      <AtributeCard />
      <AtributeCard />
    </Box>
  );
}

const CurrentForecast = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TodayCard />

      <TodayAtributes />
    </Box>
  );
};

export default CurrentForecast;
