import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loading = () => {
  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>Food Menu</h2>
          <div className='underline'></div>
        </div>

        <div className='loading'>
          <Oval
            height={80}
            width={80}
            color=' hsl(209, 61%, 16%)'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#c59d5f'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <p>Loading meals, please wait...</p>
        </div>
      </div>
    </main>
  )
}

export default Loading
