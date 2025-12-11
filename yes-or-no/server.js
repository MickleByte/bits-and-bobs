const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Read answers from JSON file
const getAnswers = () => {
  const answersPath = path.join(__dirname, 'answers.json');
  const data = fs.readFileSync(answersPath, 'utf8');
  return JSON.parse(data);
};

// API endpoint to get a random answer with weighted selection
app.get('/api/answer', (req, res) => {
  try {
    const random = Math.random();
    let selectedAnswer;

    if (random < 0.2) {
      // 20% chance: return "yes"
      selectedAnswer = "yes";
    } else if (random < 0.4) {
      // 20% chance: return "no"
      selectedAnswer = "no";
    } else {
      // 60% chance: return random answer from JSON list
      const answers = getAnswers();
      const randomIndex = Math.floor(Math.random() * answers.length);
      selectedAnswer = answers[randomIndex];
    }
    
    res.json({ answer: selectedAnswer });
  } catch (error) {
    console.error('Error reading answers:', error);
    res.status(500).json({ error: 'Failed to get answer' });
  }
});

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser to see the app`);
});

