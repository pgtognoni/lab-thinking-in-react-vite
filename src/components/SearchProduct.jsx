import React from 'react'

function SearchProduct({ searchProduct }) {
  return (
    <div className='search-container'>
        <label for='search' >
            <p>Search</p>
            <input className='search' type='text' name='search' id='search' onChange={(e) => searchProduct(e.target.value)} />
        </label>
    </div>
  )
}

export default SearchProduct