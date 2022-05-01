import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

import { Details, Main } from "./components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid ref={main} item xs={12} sm={10} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>

        <div className={classes.micIcon}>
          <PushToTalkButton />
        </div>
      </Grid>
    </div>
  );
};

export default App;
