import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName = "Chicken Karahi" sweetDish = "Custard" />

      <hr/>

      <Dinner dishName = "Chicken Biryani" sweetDish = "Kheer" />

      <hr/>
      
      <Dinner dishName = "Nihari" sweetDish = "Gajar Ka Halwa" />
    </div>
  );
}

export default App;
