import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleButtonClick = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/answer')
      const data = await response.json()
      setAnswer(data.answer)
    } catch (error) {
      console.error('Error fetching answer:', error)
      setAnswer('Error loading answer')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <button 
        className="yes-no-button" 
        onClick={handleButtonClick}
        disabled={loading}
      >
        yes/no
      </button>
      {answer && (
        <div className="answer">{answer}</div>
      )}
      {loading && !answer && (
        <div className="loading">...</div>
      )}
    </div>
  )
}

export default App
