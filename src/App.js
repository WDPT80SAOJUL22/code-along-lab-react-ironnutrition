import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';

import { Card } from 'antd'
import FoodBox from './components/FoodBox';

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
    <FoodBox food={{
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} />

  </div>;
}
export default App;