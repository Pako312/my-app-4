import './App.css';
import img_1 from "./components/assets/images/Beef-Plov3.jpg"
import img_2 from "./components/assets/images/Lagman.jpg"
import img_3 from "./components/assets/images/Manty.jpg"
import FoodCard from './components/FoodCard/FoodCard';
import { createContext, useState } from 'react';

// import ToggleBox from './components/ToggleBox';

export const ThemeContext = createContext('light')


const DATA = [
  {
    id: 1,
    image: img_1,
    title: 'Plov',
    price: 'Price',
    cost: 200,
    delete: 'Delete'
  },
  {
    id: 2,
    image: img_2,
    title: 'Lagman',
    price: 'Price',
    cost: 180,
    delete: 'Delete'
  },
  {
    id: 3,
    image: img_3,
    title: 'Manty',
    price: 'Price',
    cost: 220,
    delete: 'Delete'
  }
]

function App() {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  }
  const [dishes, setDishes] = useState(DATA);
  const [value, setInputValue] = useState('')

  function handleAddDish(e) {
    e.preventDefault();
    const copyArr = [...dishes]
    const newDish = {
      id: Math.random(),
      title: value,
      price: '',
      cost: 0,
      delete: 'Delete'
    }
    copyArr.push(newDish)
    setDishes(copyArr)
  }

  function handleDeleteDish(id) {
    setDishes(dishes.filter((food) => {
      return food.id !== id
    }))
  }

  return (
    <div id={theme}>
      <div className="container">
        <div className="toggle">
          <label for="over" className="switch-box">
            <input onChange={changeTheme} type="checkbox" className="switch__input" id="over" />
            <span className="Left on">Light</span>
            <span className="right on">Dark</span>
            <div className="box-sw"></div>
            <i className="switch-slider"></i>
          </label>
        </div>
        <div className='foodCard'>
          <div className='InputBox'>
            <form>
              <input value={value} type="text" placeholder='What do you want to eat?' onChange={(e) => setInputValue(e.target.value)} />
              <input
                onClick={handleAddDish}
                type="submit" value="Add" />
            </form>
          </div>


          {dishes.map(food => {
            return (
              <FoodCard
                key={food.id}
                data={food}
                onClick={() => handleDeleteDish(food.id)}
              />
            )
          })}
        </div>



      </div>
    </div>

  );
}

export default App;
