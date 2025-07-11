// src/contexts/AudioContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const addToQueue = (track) => {
    setQueue((prev) => [...prev, track]);
  };

  const playNext = () => {
    setCurrentTrackIndex((index) => (index + 1 < queue.length ? index + 1 : index));
  };

  return (
    <AudioContext.Provider value={{ queue, setQueue, currentTrackIndex, setCurrentTrackIndex, addToQueue, playNext }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
