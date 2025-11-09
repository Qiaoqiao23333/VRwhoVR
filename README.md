# Salzburg Card - React Project

A web application for Salzburg Card, displaying a map and list of attractions in Salzburg.

## Features

- ✅ Responsive layout with header brand area, map, and attraction list on the right
- ✅ Clickable attraction list (each row on the right is clickable)
- ✅ Pin icon appears at a fixed location on the map when an attraction is clicked
- ✅ Green area in the top-right corner of the map is a button (for future chatbot integration)
- ✅ "Chat with Kartie" button (bottom-left)
- ✅ "Get the Kartie App" button (bottom-right)
- ✅ AR model viewer for "Mozarts Wohnhaus" attraction
- ✅ Selected attraction highlights in red

## Installation and Running

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header brand area
│   │   ├── Map.jsx              # Map component
│   │   ├── AttractionList.jsx   # Attraction list
│   │   ├── ChatButton.jsx       # Chat with Kartie button
│   │   ├── AppButton.jsx        # Get the Kartie App button
│   │   └── ARModelViewer.jsx    # AR model viewer component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
│   ├── header-banner.png        # Header banner image
│   ├── map.png                  # Map image
│   ├── logo.png                 # Logo image
│   ├── pin.png                  # Pin icon
│   └── WavingMozart.usdz        # AR model file
├── index.html
├── package.json
└── vite.config.js
```

## Tech Stack

- React 18
- Vite
- CSS3
- Model Viewer (for AR functionality)

## Future Plans

- Integrate chatbot into the green area in the top-right corner of the map
- Integrate chatbot into the "Chat with Kartie" button
