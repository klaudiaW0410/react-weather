import React from"react";
import './App.css';
import Weather from "./Weather"

 export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Lund"/>
     <footer>
      This project was coded by Klaudia Wróblewska and is <a href="https://github.com/klaudiaW0410/react-weather" target="_blank" rel="noreferrer" >open-sourced  on GitHub</a>
     </footer>
     </div>
    </div>
  );
}