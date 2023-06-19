import React, { Component } from "react";
import Sample3 from "../sound samples/sample3.mp3";
import ReactAudioPlayer from "react-audio-player";

export default class Music extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">Music</h1>
        <ReactAudioPlayer src={Sample3} controls controlsList="nodownload" />
      </>
    );
  }
}
