import React, { Component } from 'react';
import './App.css';
import MyData from './components/MyData'

function App() {
  return (
    <div className="App">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
        <MyData job='Janitor'>Charlie</MyData>
        <MyData job='Bouncer'>Mac</MyData>
        <MyData job='Aspiring Actress'>Dee</MyData>
        <MyData job='Bartender'>Dennis</MyData>
      </table>
    </div>
  );
}

export default App;
