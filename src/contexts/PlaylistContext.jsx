// src/contexts/PlaylistContext.jsx
import React, { createContext, useContext, useState } from 'react';

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = async ({ name, tracks }) => {
    const newPlaylist = { id: Date.now(), name, tracks };
    setPlaylists((prev) => [...prev, newPlaylist]);
    return newPlaylist;
  };

  return (
    <PlaylistContext.Provider value={{ playlists, createPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
