import { Box } from "@mui/material";
import React from "react";
import { appBoxSx } from "./AppBox";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import HourlyForcast from "./HourlyForcast";

const Forecast = ({ data }) => {
  return (
    <Box sx={{ flex: 1, display: "flex", gap: "10px" }}>
      <Box
        sx={{
          width: "65%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box sx={{ width: "100%", height: "70%" }}>
          <CurrentForecast />
        </Box>
        <Box sx={{ width: "100%", height: "40%" }}>
          <DailyForecast data={data} />
        </Box>
      </Box>
      <Box sx={{ ...appBoxSx, width: "35%" }}>
        <HourlyForcast />
      </Box>
    </Box>
  );
};

export default Forecast;
