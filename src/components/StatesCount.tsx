import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";

const stats = [
  { count: 250, title: "Happy Clients", seperator: "+", id: "happy-clients" },
  { count: 12, title: "Countries", seperator: "+", id: "countries" },
  { count: 48, title: "Features", seperator: "+", id: "features" },
  { count: 4.8, title: "Reviews & Rating", seperator: "+", id: "rating" },
];
const StatesCount = () => {
  return (
    <Grid container justifyContent={"center"}>
      {stats.map((item, idx) => (
        <Grid size={{xs:6,sm:2}} key={`${item.title}_${idx}`}>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 42 }}>
              <CountUp
                start={0}
                end={item.count}
                duration={7.25}
                decimals={item.id === "rating" ? 1 : 0}
                suffix={item.id === "rating" ? "/5" : item.seperator}
              />
            </Typography>
            <Typography>{item.title}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatesCount;
