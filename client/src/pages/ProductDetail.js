import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
	const { id } = useParams()

	console.log(id)

	const [product, setProduct] = useState()

	useEffect(() => {
		axios.get(`/products/${id}`).then((res) => console.log(res))
	}, [id])

	return <div>ProductDetail</div>
}

export default ProductDetail
