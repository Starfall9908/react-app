import AudioPlayer from "../components/AudioPlayer";
import React, { MouseEventHandler } from "react";
import styles from "../styling/Music.module.css";
import tracks from "../assets/tracks";
import "../styling/AudioPlayer.css";

function Music() {
  return (
    <>
      <style>
        {"body {background-color: var(--active-color) !important;}"}
      </style>
      <h1 className={`text-center ${styles.musicTitle}`}>Music</h1>
      <AudioPlayer tracks={tracks} />
    </>
  );
}

export default Music;
