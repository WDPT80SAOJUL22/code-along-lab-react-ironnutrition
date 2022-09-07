import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';

import { Card } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

const App = () => {

  const [foods, setFoods] = useState(foodsData)

  const addNewFood = (newFood) => {
    const newFoods = [newFood, ...foods]
    setFoods(newFoods)
  }

  return <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    {foods.map((food, index) => {
      return (
        <FoodBox key={index} {...food} />
      )
    })}
    

  </div>;
}
export default App;