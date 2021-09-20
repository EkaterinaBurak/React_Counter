
import './App.css';
import React from 'react';
import { Counter } from "./components/Counter"
import { Watch } from "./components/Watch"
import { EmojiList } from './components/Emoji';
import { Timer } from "./components/Timer"




function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <div className="app__counter">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
      <h1>Task 2</h1>
      <Watch />
      <h1>Task 3</h1>
      <Timer />
      <h1>Task 4</h1>
      <EmojiList />
    </div>
  );


};

export default App;

