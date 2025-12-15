import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { appBoxSx } from "./AppBox";

function DailyCard({ day }) {
  return (
    <Box sx={{ ...appBoxSx, flex: 1, alignItems: "center" }}>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {day.day}
      </Typography>
      <Box
        component="img"
        src={day.status}
        alt="Sunny"
        sx={{ width: "100%" }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle1">{day.maxTemp}</Typography>
        <Typography variant="subtitle1">{day.minTemp}</Typography>
      </Box>
    </Box>
  );
}

const DailyForecast = ({ data }) => {
  return (
    <Fragment>
      <Typography variant="h4">Daily Forecast</Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {data.map((day, index) => (
          <Fragment key={index}>
            <DailyCard day={day} />
          </Fragment>
        ))}
      </Box>
    </Fragment>
  );
};

export default DailyForecast;
