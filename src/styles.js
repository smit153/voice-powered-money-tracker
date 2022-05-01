import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
    marginbottom: "25px",
  },
  micIcon: {
    position: "fixed",
    bottom: "15px",
    right: "1vw",
  },
}));
