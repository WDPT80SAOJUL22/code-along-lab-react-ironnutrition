import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';

import { Card } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

const App = () => {

  const [foods, setFoods] = useState(foodsData)
  const [filteredFoods, setFilteredFoods] = useState(foods)

  const filterFoods = (input) => {
    const filtered = foods.filter(food => food.name.toLowerCase().includes(input.toLowerCase()))
    setFilteredFoods(filtered)
  }

  const addNewFood = (newFood) => {
    const newFoods = [newFood, ...foods]
    setFoods(newFoods)
  }

  return <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    <Search filterFoods={filterFoods}/>
    {filteredFoods.map((food, index) => {
      return (
        <FoodBox key={index} {...food} />
      )
    })}
    

  </div>;
}
export default App;