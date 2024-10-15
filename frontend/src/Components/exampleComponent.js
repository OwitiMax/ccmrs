// ExampleComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/'); // Change to your API endpoint
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleComponent;
