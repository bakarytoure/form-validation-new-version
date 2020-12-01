import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
}));

export const Success = () => {
  const classes = useStyles();
  return (
    <div className={classes.textCenter}>
      <h1>All Done!</h1>
    </div>
  );
};
