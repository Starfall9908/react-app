import React from "react";
import { ReactComponent as Next } from "../assets/images/next.svg";
import { ReactComponent as Pause } from "../assets/images/pause.svg";
import { ReactComponent as Play } from "../assets/images/play.svg";
import { ReactComponent as Prev } from "../assets/images/prev.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audioControls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        aria-label="Pause"
        onClick={() => onPlayPauseClick(false)}
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        aria-label="Play"
        onClick={() => onPlayPauseClick(true)}
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;
