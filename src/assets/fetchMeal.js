// fetch random meal
// const chickenForBreakFast =
//   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'
// const seaFoodForLunch =
//   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
// const desertForDinner =
//   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'

const fetchMealById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const fetchMealBySearch =
  '"https://www.themealdb.com/api/json/v1/1/search.php?s="'

// fetch breakfast meal
export const breakfastMeal = async () => {
  const response = await fetch(chickenForBreakFast, {
    method: 'GET',
  })
  const respData = await response.json()
  const firstMeal = respData.meals.map((v) => ({ ...v, category: 'breakfast' }))
  // console.log(firstMeal)
  return firstMeal
}

// fetch lunch meal
export const lunchMeal = async () => {
  const response = await fetch(seaFoodForLunch, {
    method: 'GET',
  })
  const respData = await response.json()
  const secondMeal = respData.meals.map((v) => ({ ...v, category: 'lunch' }))
  // console.log(secondMeal)
  return secondMeal
}

// fetch dinner meal
export const dinnerMeal = async () => {
  const response = await fetch(desertForDinner, {
    method: 'GET',
  })
  const respData = await response.json()
  const thirdMeal = respData.meals.map((v) => ({ ...v, category: 'dinner' }))
  // console.log(thirdMeal)
  return thirdMeal
}

// fetch meal by id
export const mealById = async (id) => {
  const response = await fetch(fetchMealById + id, {
    method: 'GET',
  })
  const respData = await response.json()
  const mealById = respData.meals
  return mealById
}

// fetch by search
export const mealBySearch = async (search) => {
  const response = await fetch(fetchMealBySearch + search, {})
  const respData = await response.json()
  const mealSearch = respData.meals
  return mealSearch
}
