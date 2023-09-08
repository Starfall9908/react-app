import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    console.log("TODO go to prev");
  };

  const toNextTrack = () => {
    console.log("TODO go to next");
  };

  return (
    <div className="audioPlayer">
      <div className="trackInfo">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
      </div>
    </div>
  );
};

export default AudioPlayer;
