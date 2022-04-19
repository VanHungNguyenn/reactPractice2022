import React, { useState } from 'react'

const Test = () => {
	const [count, setCount] = useState(0)

	const increase = () => {
		setCount(count + 1)
	}

	return (
		<div style={{ padding: '10px 32px' }}>
			<h1>{count}</h1>
			<button onClick={increase}>Increase</button>
		</div>
	)
}

export default Test
