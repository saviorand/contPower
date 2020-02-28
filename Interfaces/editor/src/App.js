import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/editor';

function App() {
  return (
    <div className="App">
      <Editor />
      
    <div id="preview" class="text-center border"></div>
    </div>
  );
}

export default App;
