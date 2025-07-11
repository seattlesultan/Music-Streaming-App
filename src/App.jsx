// src/App.jsx
import React from 'react';
import { AudioProvider } from './contexts/AudioContext';
import { PlaylistProvider } from './contexts/PlaylistContext';
import SaveQueueAsPlaylist from './components/SaveQueueAsPlaylist';

const App = () => {
  return (
    <AudioProvider>
      <PlaylistProvider>
        <div className="min-h-screen bg-black text-white p-4">
          <h1 className="text-xl font-bold mb-4">Music Streaming App</h1>
          <SaveQueueAsPlaylist />
        </div>
      </PlaylistProvider>
    </AudioProvider>
  );
};

export default App;
