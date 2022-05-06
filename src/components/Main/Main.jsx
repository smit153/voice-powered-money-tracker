import React, { useContext } from "react";
// import { Grid, IconButton } from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Grid,
  Divider,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@material-ui/core";
// import { useSpeechContext } from "@speechly/react-client";
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  //const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <div className={classes.clearButton}>
        <IconButton edge="end" aria-label="delete">
          <Delete
            onClick={() => {
              localStorage.removeItem("transactions");
              window.location.reload();
            }}
          />
        </IconButton>
      </div>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />

      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "10px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
