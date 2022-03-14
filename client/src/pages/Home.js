import React, { useState } from 'react'

const Home = () => {
	const [product, setProduct] = useState(1)

	console.log(product)

	return (
		<>
			<div>Home</div>
			<div>Home</div>
			<div>Home</div>
			<h1>{product}</h1>
			<button onClick={() => setProduct((prev) => prev + 1)}>
				Click
			</button>
		</>
	)
}

export default Home
