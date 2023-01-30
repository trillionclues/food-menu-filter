import { useEffect, useState } from 'react'
import './App.css'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
// meal data
import { url } from './assets/fetchMeal'
import Loading from './Components/Loading'

function App() {
  const [categories, setCategories] = useState([])
  const [mealItems, setMealItems] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // console.log(menuItems)
  // console.log(mealItems.length)

  // fetch meal and concate all

  const getMeal = async (mealType, mealTime) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}${mealType}`)
      const respData = await response.json()
      const Meal = respData.meals.map((v) => ({ ...v, category: mealTime }))
      setIsLoading(false)
      return Meal
    } catch (error) {
      setIsLoading(false)
    }
  }

  const fetchAllMeal = async () => {
    const chicken = await getMeal('Chicken', 'Breakfast')
    const seafood = await getMeal('Seafood', 'Lunch')
    const dessert = await getMeal('Dessert', 'Dinner')
    const AllMeals = [...chicken, ...seafood, ...dessert]
    setMenuItems(AllMeals)

    // create a new array adding a new category type to the menu category data
    const allCategories = [
      'all',
      ...new Set(AllMeals.map((item) => item.category)),
    ]
    setCategories(allCategories)
  }

  useEffect(() => {
    const renderMailList = fetchAllMeal()
    return () => {
      renderMailList
    }
  }, [])

  // check loading state
  if (isLoading) {
    return <Loading />
  }

  // filter meal category
  const filterNav = (catItem) => {
    // console.log(catItem, 'catItem')
    if (catItem === 'all') {
      setMenuItems(menuItems)
      return
    }
    // set items to respective original categories
    const newItems = menuItems.filter((meal) => meal.category === catItem)
    console.log(newItems)
    return setMenuItems(newItems)
  }

  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>Food Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterNav={filterNav} />
        <Menu isLoading={isLoading} menuItems={menuItems} />
      </div>
    </main>
  )
}

export default App
