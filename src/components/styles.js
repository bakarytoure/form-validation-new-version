import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";
import { blue, lightGreen } from "@material-ui/core/colors";
let theme = createMuiTheme({
  palette: {
    type: "light",
    //type: "dark",
    //primary: amber,
    primary: blue,
    secondary: lightGreen,
    //secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    borderRadius: 3,
    border: 0,
    color: "white",
    width: "20rem",

    paddingTop: 50,
    paddingBottom: 10,
    margin: "auto",
  },
  buttonC: {
    height: "3.5rem",
    backgroundColor: "#33DAFF",
    fontSize: 30,
  },
  buttonB: {
    height: "3.5rem",
    backgroundColor: "#33DAFF",
    fontSize: 10,
  },
  icon: {
    marginLeft: 60,
    textAlign: "left",
    fontSize: 30,
  },
  birthday: {
    color: "gray",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "gray",
    fontWeight: "bold",
  },
}));

export { theme, useStyle };
