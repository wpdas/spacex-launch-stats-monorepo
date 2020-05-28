import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const API = 'http://localhost:5000';
    const fetchData = async () => {
      const data = await fetch(API);
      const content = await data.text();
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
