import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import SearchSection from "../components/SearchSection";
const Home = () => {
  return (
    <Box style={{ border: "1px solid white", width: "100%", height: "1000px" }}>
      <NavBar />
      <SearchSection />
    </Box>
  );
};

export default Home;
