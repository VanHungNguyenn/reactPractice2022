import React from 'react'

const Pagination = ({ totalPages, page }) => {
	const newArr = [...Array(totalPages)].map((_, i) => i + 1)

	const isActive = (index) => {
		return index === page ? 'active' : ''
	}

	return (
		<div className='pagination'>
			<button>&laquo;</button>
			{newArr.map((page) => (
				<button key={page} className={`${isActive(page)}`}>
					{page}
				</button>
			))}
			<button>&raquo;</button>
		</div>
	)
}

export default Pagination
