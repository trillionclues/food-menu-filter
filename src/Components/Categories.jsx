import React from 'react'
import foodItems from '../assets/data'

const Categories = ({ categories, setFoodItems }) => {
  // console.log(categories)

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
    <div className='category__nav'>
      {categories.map((category, i) => {
        return (
          <button
            type='button'
            key={i}
            className='nav__btn'
            onClick={filterNav}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
