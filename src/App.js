import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProfessor from './pages/AddProfessor';
import EditProfessor from './pages/EditProfessor';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-professor" element={<AddProfessor />} />
          <Route path="/edit-professor/:id" element={<EditProfessor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
