import "./App.css";

import React, { useEffect, useRef } from "react";

import Grid from "@mui/material/Grid";
import HeartButton from "./components/HeartButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  padding: theme.spacing(0.5),
  margin: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: "center",
  color: "white",
}));

const audioClips = [
  {
    key: "Q",
    name: "Heater 1",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    name: "Heater 2",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    name: "Heater 3",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    name: "Clap",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    name: "Open-HH",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    name: "Kick-n'-Hat",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    name: "Kick",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    name: "Closed-HH",
    source:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function DrumPad({ clip, updateDisplay }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      updateDisplay(clip.name);
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key.toUpperCase() === clip.key) {
        playAudio();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [clip.key]);

  return (
    <Grid item>
      <Item className="drum-pad" id={clip.name} onClick={playAudio}>
        <audio
          className="clip"
          ref={audioRef}
          id={clip.key}
          src={clip.source}
        />
        <HeartButton onClick={playAudio} />
        <Typography>{clip.key}</Typography>
      </Item>
    </Grid>
  );
}

function DrumRow({ positions, updateDisplay }) {
  const { start, end } = positions;
  return (
    <Grid container>
      {audioClips.slice(start, end).map((clip, index) => (
        <DrumPad key={index} clip={clip} updateDisplay={updateDisplay} />
      ))}
    </Grid>
  );
}

function Drums({ updateDisplay }) {
  return (
    <>
      <DrumRow positions={{ start: 0, end: 3 }} updateDisplay={updateDisplay} />
      <DrumRow positions={{ start: 3, end: 6 }} updateDisplay={updateDisplay} />
      <DrumRow positions={{ start: 6, end: 9 }} updateDisplay={updateDisplay} />
    </>
  );
}

function Display({ display }) {
  return (
    <Grid item>
      <Item className="display">
        <Typography id="display">{display}</Typography>
      </Item>
    </Grid>
  );
}

function DrumMachine() {
  const [display, setDisplay] = React.useState("Press a button to start");

  const updateDisplay = (name) => {
    setDisplay(name);
  };

  return (
    <Grid className="drum-machine" id="drum-machine">
      <Drums updateDisplay={updateDisplay} />
      <Display display={display} />
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
}

export default App;
