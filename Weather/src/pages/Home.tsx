import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import SearchSection from "../components/SearchSection";
import Forecast from "../components/Forecast";

import IconSunny from "../assets/images/icon-sunny.webp";
import IconRain from "../assets/images/icon-rain.webp";
import IconSnow from "../assets/images/icon-snow.webp";
import IconStorm from "../assets/images/icon-storm.webp";
import IconFog from "../assets/images/icon-fog.webp";
import IconDizzle from "../assets/images/icon-drizzle.webp";
import IconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import IconOverCast from "../assets/images/icon-overcast.webp";

const days = [
  { day: "Tuesday", maxTemp: "20°", minTemp: "10°", status: IconSunny },
  { day: "Wednesday", maxTemp: "30°", minTemp: "20°", status: IconFog },
  { day: "Thursday", maxTemp: "40°", minTemp: "30°", status: IconDizzle },
  { day: "Friday", maxTemp: "50°", minTemp: "40°", status: IconOverCast },
  { day: "Saturday", maxTemp: "60°", minTemp: "50°", status: IconRain },
  { day: "Sunday", maxTemp: "10°", minTemp: "0°", status: IconSnow },
  { day: "Monday", maxTemp: "20°", minTemp: "10°", status: IconStorm },
];
const Home = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <SearchSection />
      <br />
      <Forecast data={days} />
    </Box>
  );
};

export default Home;
