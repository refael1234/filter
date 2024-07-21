import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchApp from './components/SearchApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
