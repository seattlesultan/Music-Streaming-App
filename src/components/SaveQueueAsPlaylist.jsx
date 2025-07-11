// src/components/SaveQueueAsPlaylist.jsx
import React, { useState } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { usePlaylist } from '../contexts/PlaylistContext';

const SaveQueueAsPlaylist = () => {
  const { queue } = useAudio();
  const { createPlaylist } = usePlaylist();
  const [playlistName, setPlaylistName] = useState('');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    if (!playlistName.trim()) return;
    setSaving(true);
    setError(null);
    try {
      const trackIds = queue.map(track => track._id);
      if (!trackIds.length) throw new Error('Queue is empty.');

      await createPlaylist({ name: playlistName.trim(), tracks: trackIds });
      setPlaylistName('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Error saving playlist:', err);
      setError('Failed to save playlist. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-2 border-t border-gray-700">
      <h4 className="text-sm font-semibold mb-1">Save Queue as Playlist</h4>
      <div className="flex items-center space-x-2">
        <input
          className="bg-gray-900 border border-gray-600 text-sm px-2 py-1 rounded w-full"
          placeholder="Playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          aria-label="Playlist name input"
        />
        <button
          className="bg-green-600 px-3 py-1 rounded text-sm hover:bg-green-700 disabled:opacity-50"
          onClick={handleSave}
          disabled={saving || !playlistName.trim() || queue.length === 0}
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
      {success && <div className="text-green-400 text-xs mt-1">Playlist saved!</div>}
      {error && <div className="text-red-400 text-xs mt-1">{error}</div>}
    </div>
  );
};

export default SaveQueueAsPlaylist;
