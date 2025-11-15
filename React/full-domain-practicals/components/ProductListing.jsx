import React from 'react'

const ProductListing = ({product,productsList,search}) => {
  let searchedProducts = [];
  if(search){
    for(let i=0;i<product.length;i++){
      if(product[i].toLowerCase().includes(search.toLowerCase())){
        searchedProducts.push(product[i]);
      }
    }
  }
  return (
    <div>
      <h2>List</h2>
      {
        <ul>
          {(search ? searchedProducts : product).map((x,i)=><h3 key={i}>{x}</h3>)}
        </ul>
      }
    </div>
  )
}

export default ProductListing