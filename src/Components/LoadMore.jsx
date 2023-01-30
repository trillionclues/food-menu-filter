import React from 'react'

const LoadMore = ({ setMaxData, maxData, menuItems }) => {
  return (
    <>
      {maxData < menuItems.length && (
        <button
          className='load__more-btn'
          onClick={() => setMaxData(maxData + 4)}
        >
          Load more
        </button>
      )}
    </>
  )
}

export default LoadMore
