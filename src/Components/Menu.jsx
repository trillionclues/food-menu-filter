import React, { useState } from 'react'
import Loading from './Loading'
import LoadMore from './LoadMore'

const Menu = ({ menuItems, isLoading }) => {
  const [maxData, setMaxData] = useState(6)
  return (
    <div className='section-center'>
      {isLoading ? (
        <Loading />
      ) : (
        menuItems.slice(0, maxData).map((food) => {
          const { strMeal, strMealThumb, idMeal, category } = food
          return (
            <>
              <article key={idMeal} className='menu-item'>
                <img src={strMealThumb} alt={strMeal} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{strMeal}</h4>
                    <h4 className='price'>$0</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur perferendis laboriosam excepturi repellat recusandae
                    iure itaque!
                  </p>
                </div>
              </article>
            </>
          )
        })
      )}
      <LoadMore
        setMaxData={setMaxData}
        maxData={maxData}
        menuItems={menuItems}
      />
    </div>
  )
}

export default Menu
