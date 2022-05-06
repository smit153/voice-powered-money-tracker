import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import "./snow.scss";

// import {  useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import { Details, Main } from "./components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  // const { speechState } = useSpeechContext();
  const main = useRef(null);

  // const executeScroll = () => main.current.scrollIntoView();
  const shape = [];
  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [speechState]);
  for (let i = 0; i < 50; i++) {
    shape.push(<div className="snow" key={i}></div>);
  }

  return (
    <div>
      {/* <canvas id="projector"> */}
      {shape}
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh", zIndex: 1 }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
      {/* </canvas> */}

      {/* <script src="https://code.createjs.com/easeljs-0.7.1.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
      <script src="./script.js"></script> */}
    </div>
  );
};

export default App;
