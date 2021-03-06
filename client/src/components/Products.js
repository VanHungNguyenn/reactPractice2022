import React, { memo } from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
	return (
		<div className='products'>
			{products.map((product) => {
				return <ProductsCard key={product._id} product={product} />
			})}
		</div>
	)
}

export default memo(Products)
