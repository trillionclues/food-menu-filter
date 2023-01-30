import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearch }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.5em' />
      <input
        onChange={(e) => console.log(e.target.value)}
        type='text'
        placeholder='Search...'
      />
    </div>
  )
}

export default Search
