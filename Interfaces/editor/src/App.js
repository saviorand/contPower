import React from 'react';
import './App.css';
import Editor from './components/editor';

function App() {
  return (
    <div className="App">
      <Editor />
    <div id="preview" className="text-center border"></div>
    </div>
  );
}

export default App;
