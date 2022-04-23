import React from 'react'
import useCustomRoute from '../hooks/useCustomRoute'
import { useNavigate } from 'react-router-dom'

const Sorting = ({ page, sort }) => {
	const { pushQuery } = useCustomRoute()

	const navigate = useNavigate()
	const handleSort = (e) => {
		const { value } = e.target
		navigate(`?sort=${value}`)
	}

	return (
		<div className='sorting'>
			<select onChange={handleSort} value={sort}>
				<option value='-createdAt'>Newest</option>
				<option value='createdAt'>Oldest</option>
				<option value='-price'>Price: Hight-Low</option>
				<option value='price'>Price: Low-Hight</option>
			</select>
			{/* <h2>&#8678;Sort</h2> */}
		</div>
	)
}

export default Sorting
