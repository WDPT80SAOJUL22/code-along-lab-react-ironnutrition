import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';

import { Card } from 'antd'

const App = () => {

  const [foods, setFoods] = useState(foodsData)

  return <div className="App">
    {foods.map(food => {
      return (
        <div>
          <p> {food.name} </p>
          <img src={food.image} width={50} />
        </div>
      )
    })}

  </div>;
}
export default App;