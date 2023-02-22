import React from 'react'

function ShowInStock({ showInStock }) {
  return (
    <div className='search-container checkbox'>
        <label>
            <p>Show in stock</p>
            <input type="checkbox" onChange={(e) => showInStock(e.target.checked)} />
        </label>
    </div>
  )
}

export default ShowInStock