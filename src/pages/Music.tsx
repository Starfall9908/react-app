import AudioPlayer from "../components/AudioPlayer";
import React, { MouseEventHandler } from "react";
import tracks from "../assets/tracks";
import "../styling/AudioPlayer.css";
import "../styling/Music.css";

function Music(props: {
  toggleMode: MouseEventHandler<HTMLInputElement>;
  mode: string;
}) {
  let textMode = props.mode === "light" ? "black" : "white";
  return (
    <>
      <style>{"body {background: var(--active-color);}"}</style>
      <h1 className="text-center musicTitle">Music</h1>
      <AudioPlayer tracks={tracks} />
    </>
  );
}

export default Music;
