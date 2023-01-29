import React, { useEffect, useState } from 'react'
import foodItems from '../assets/data'
import { breakfastMeal } from '../assets/fetchMeal'

// meal data
const mealWithCat = [
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken',
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
]

const Categories = ({ categories, setFoodItems }) => {
  const [mealData, setMealData] = useState([])
  // console.log(categories)

  // fetch meal and concate all
  const getData = async () => {
    const results = await Promise.all(
      mealWithCat.map((url) => fetch(url).then((res) => res.json()))
    ).then((mealData) => {
      const [result1, result2, result3] = mealData
      // const breakfastMeal = mealData.meals((first) => ({
      //   ...first,
      //   category: 'breakfast',
      // }))

      return [...result1.meals, ...result2.meals, ...result2.meals]
    })
    setMealData(results)
    console.log(results)
  }

  //   const respData = await response.json()
  // const firstMeal = respData.meals.map((v) => ({ ...v, category: 'breakfast' }))

  useEffect(() => {
    getData()
  }, [])

  // filter meal category
  const filterNav = (catItem) => {
    if (catItem === 'all') {
      setFoodItems(foodItems)
      return
    }

    // set items to respective original categories
    const newItems = foodItems.filter(
      (foodItem) => foodItem.category === catItem
    )
    setFoodItems(newItems)
  }

  return (
    <div className='btn-container'>
      {categories.map((category, i) => {
        return (
          <button
            type='button'
            key={i}
            className='filter-btn'
            onClick={() => filterNav(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
