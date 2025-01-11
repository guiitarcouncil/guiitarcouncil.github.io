// src/Programs.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/programs/') // Django backend API endpoint
      .then((response) => {
        setPrograms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the programs!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.name}</h2>
            <p>{program.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
