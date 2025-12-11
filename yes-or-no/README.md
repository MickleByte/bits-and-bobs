# Yes or No Web App

A simple web application with a round red button that displays random answers when clicked.

## Setup

### Backend (Node.js/Express)

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

### Frontend (React)

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The React app will run on `http://localhost:5173` (or another port if 5173 is taken)

## Usage

1. Start the backend server (from the root directory): `npm start`
2. Start the frontend (from the client directory): `npm run dev`
3. Open your browser to the frontend URL (usually `http://localhost:5173`)
4. Click the round red "yes/no" button to get a random answer!

## API

- `GET /api/answer` - Returns a random answer from the answers.json file

## Project Structure

- `server.js` - Express backend server
- `answers.json` - JSON file containing the list of possible answers
- `client/` - React frontend application
  - `src/App.jsx` - Main React component with the button
  - `src/App.css` - Styles for the button and answer display
