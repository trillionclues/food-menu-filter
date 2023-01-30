// fetch random meal
export const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const fetchMealById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const mealSearch = '"https://www.themealdb.com/api/json/v1/1/search.php?s="'

// fetch breakfast meal
export const getMeal = async (mealType, mealTime) => {
  const response = await fetch(`${url}${mealType}`)
  const respData = await response.json()
  const Meal = respData.meals.map((v) => ({ ...v, category: mealTime }))
  return Meal
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
  const response = await fetch(mealSearch + search, {})
  const respData = await response.json()
  const mealSearch = respData.meals
  return mealSearch
}
