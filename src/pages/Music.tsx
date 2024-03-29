import AudioPlayer from "../components/AudioPlayer";
import React, { Component } from "react";
import tracks from "../assets/tracks";
import "../styling/AudioPlayer.css";
import "../styling/Music.css";

export default class Music extends Component {
  render() {
    return (
      <>
        <style>{"body {background: var(--active-color);}"}</style>
        <h1 className="text-center musicTitle">Music</h1>
        <AudioPlayer tracks={tracks} />
      </>
    );
  }
}
