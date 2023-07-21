// NumberManagementComponent.js

import React, { useState } from 'react';

const NumberManag = () => {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setUrls(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/numbers?url=${urls}`);
      const data = await response.json();
      setResult(data.numbers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Number Management Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter URLs separated by comma"
            value={urls}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Fetch Numbers
          </button>
        </div>
      </form>
      {result && (
        <div>
           
          <h2 className="mt-4">Result:</h2>
          <ul className="list-group">
            {result.map((number) => (
              <li key={number} className="list-group-item">
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NumberManag;
