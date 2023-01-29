import { useEffect, useState } from 'react'
import './App.css'
import items from '../src/assets/data'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
// meal data
import { breakfastMeal, dinnerMeal, lunchMeal } from './assets/fetchMeal'

// create a new array adding a new category type to the menu category data
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [foodItems, setFoodItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [mealCat, setMealCat] = useState(['Breakfast', 'Lunch', 'Shakes'])

  // const [data, setData] = useState([])

  // const urls = [
  //   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken',
  //   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
  // ]

  // const getData = async () => {
  //   const results = await Promise.all(
  //     urls.map((url) => fetch(url).then((res) => res.json()))
  //   ).then((data) => {
  //     const [result1, result2] = data
  //     return [...result1.meals, ...result2.meals]
  //   })
  //   setData(results)
  //   console.log(results)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>Food Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} setFoodItems={setFoodItems} />
        <Menu foodItems={foodItems} />
      </div>
    </main>
  )
}

export default App
