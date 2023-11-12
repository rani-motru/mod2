import React from 'react'

function Score({score}) {
  return (
    <div>
    <h3>Exam Held On:</h3>{score.date}
    <h3>Student's Score</h3>{score.score}
    </div>
  )
}

export default Score;