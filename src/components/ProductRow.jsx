import React from 'react'

function ProductRow(props) {

    const { product } = props;
    const { name, price, inStock } = product;

    const outOfStock = {
        color: 'red',
        fontWeight: 'bold'
    }

  return (
    <tr style={!inStock ? outOfStock : null}>
        <td>{name}</td>
        <td>{price}</td>
    </tr>
  )
}

export default ProductRow  