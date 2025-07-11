# 🎵 Music Streaming App

An open-source, full-featured music streaming platform built with React and Node.js. Designed to be modular, modern, and easily extendable — featuring playlist support, audio queues, waveform visualization, artist uploads, and user libraries.

---

## 🚀 Features

### 🔐 Authentication
- Register, login, logout
- Auto-login after registration
- "Remember me" support
- Error handling and loading states

### 🎧 Audio Playback
- Seamless queue playback
- Persistent player UI across all pages
- Waveform visualizer with scrub support
- Support for all major formats (MP3, FLAC, WAV, etc.)

### 🎼 User Library
- Sort by: Songs, Albums, Artists, Producers
- Search & filter across full library
- Personalized views

### 📁 Uploads & Metadata
- Artists can upload music (drag & drop or bulk)
- Supports audio + album art + ISRC + contributors
- Metadata autofill via APIs (e.g., MusicBrainz)

### 📃 Playlists & Queue
- Drag-and-drop queue
- Save current queue as a playlist
- Multiple playlist tabs for switching between them
- Public playlist sharing & following

### 💡 UI/UX
- Mobile responsive
- Dark mode
- Keyboard navigation support
- Accessible (ARIA labels, screen reader-ready)

### ⚙️ Performance
- Lazy loading
- Client-side caching
- Optimized audio streaming

---

## 📷 Screenshots

*(Add screenshots here of player, upload form, waveform, etc.)*

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Zustand or Context API
- **Backend**: Node.js (Express) or full-stack setup
- **Database**: MongoDB or PostgreSQL
- **Storage**: Cloudinary, S3, or local storage
- **Waveform**: [wavesurfer.js](https://wavesurfer-js.org/)

---

## 🧪 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/music-streaming-app.git
cd music-streaming-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

> Make sure your backend (API & DB) is running if you're testing uploads/auth.

---

## 📦 Folder Structure

```
src/
  ├── components/
  │   └── SaveQueueAsPlaylist.jsx
  ├── contexts/
  │   ├── AudioContext.jsx
  │   └── PlaylistContext.jsx
  └── App.jsx
```

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request 🚀
