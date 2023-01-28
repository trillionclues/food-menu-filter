import React from 'react'

const Menu = ({ foodItems }) => {
  return (
    <div className='menuItem'>
      {foodItems.map((food) => {
        const { id, title, price, img, desc } = food
        return (
          <article key={id} className='foodItem'>
            <img src={img} alt={title} className='food__img' />
            <div className='food__info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='food__text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
