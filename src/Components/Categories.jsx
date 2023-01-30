import React, { useEffect, useState } from 'react'
import foodItems from '../assets/data'
import Search from './Search'

const Categories = ({ categories, filterNav }) => {
  const [search, setSearchText] = useState('')
  // const [mealData, setMealData] = useState([])
  // // fetch meal and concate all
  // const getData = async () => {
  //   const results = await Promise.all(
  //     mealWithCat.map((url) => fetch(url).then((res) => res.json()))
  //   ).then((mealData) => {
  //     const [result1, result2, result3] = mealData
  //     // const breakfastMeal = mealData.meals((first) => ({
  //     //   ...first,
  //     //   category: 'breakfast',
  //     // }))

  return (
    <div className='btn-container'>
      <div className='category__nav'>
        <div>
          {categories.map((category, i) => {
            // console.log(category)
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
        <Search handleSearch={setSearchText} />
      </div>
    </div>
  )
}

export default Categories
