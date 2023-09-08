import AudioPlayer from "../components/AudioPlayer";
import React, { Component } from "react";
import Sample3 from "../sound samples/sample3.mp3";
import tracks from "../assets/tracks";

export default class Music extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">Music</h1>
        <AudioPlayer tracks={tracks} />
      </>
    );
  }
}
