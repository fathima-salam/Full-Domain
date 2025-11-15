import React from 'react'

const SearchInput = ({setSearch}) => {
    
  return (
    <div>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Here'/>
    </div>
  )
}

export default SearchInput