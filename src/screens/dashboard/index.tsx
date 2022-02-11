import { Typography, Box, useTheme } from "@mui/material";
import {makeStyles, createStyles} from '@mui/styles'


const useStyles = makeStyles((theme) =>
  createStyles({
    wel: {
      fontSize: "48px !important",
      fontFamily: "remote-alt",
      marginTop: "2rem !important",
    },
    container: {
      backgroundColor: "#6b5b95 !important",
    },
  })
);
function Dashboard() {
const theme= useTheme()
    const classes= useStyles(theme) 
  return (
    <Box className={classes.container}>
      <Typography className={classes.wel}>Welcome To Dashboard</Typography>
    </Box>
  );
}

export default Dashboard;
