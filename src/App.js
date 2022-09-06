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
        <FoodBox {...food} />
      )
    })}
    

  </div>;
}
export default App;