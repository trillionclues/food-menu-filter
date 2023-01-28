import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import items from '../src/assets/data'
import Categories from './Components/Categories'
import Menu from './Components/Menu'

// create a new array adding a new category type to the menu category data
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [foodItems, setFoodItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // console.log(categorories)

  return (
    <main className='App'>
      <div className='menu'>
          <div className='title'>
            <h2>Food Menu</h2>
            <hr />
          </div>
          <Categories categories={categories} setFoodItems={setFoodItems} />
          <Menu foodItems={foodItems} />
      </div>
    </main>
  )
}

export default App
