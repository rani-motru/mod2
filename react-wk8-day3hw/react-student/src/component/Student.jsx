import React from 'react'
import Score from './Score.jsx'

function Student({student}) {
  return (
    <div>
    <h1>Student Name:</h1>{student.name}
    <h3>Sudent Bio:</h3>{student.bio}
    <div className="x">
        {student.scores.map((score, index) => (
            <Score key={index} score={score} />
        ))}
        </div>
    </div>
  )
}

export default Student