import React, { useState } from 'react'
import datajson from '../data.json'
import ProductRow from './ProductRow'
import SearchProduct from './SearchProduct'
import ShowInStock from './ShowInStock'

function ProductsPage() {

    const data = datajson
    const [ products, setProducts ] = useState(data)

    const searchProduct = (name) => { 
        const newArr = [...data]
        const filteredArr = newArr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
        setProducts(filteredArr);
    }

    const showInStock = (value) => { 
        if (value) {
            const newArr = [...data]
            const filteredArr = newArr.filter(product => product.inStock === true)
            setProducts(filteredArr);
        } else {
            setProducts(data);
        }
    }


  return (
    <div>
        <h1>Products Page</h1>
        <SearchProduct searchProduct={searchProduct}/>
        <ShowInStock showInStock={showInStock} />
        <table className='table-container'>
            <thead className='table-head'>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody className='table-body'>
            {products.map((product) => 
                <ProductRow product={product} key={product.id}/>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsPage