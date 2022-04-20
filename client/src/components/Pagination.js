import { memo } from 'react'
import usePagination from '../hooks/usePagination'

const Pagination = ({ totalPages, page }) => {
	const { firstArr, lastArr, isActive, prev, next, jump } = usePagination(
		totalPages,
		page
	)

	return (
		<div className='pagination'>
			<button onClick={prev}>&laquo;</button>
			{firstArr.map((page) => (
				<button
					key={page}
					className={`${isActive(page)}`}
					onClick={() => jump(page)}
				>
					{page}
				</button>
			))}
			{lastArr.length > 0 && <button>...</button>}
			{lastArr.map((page) => (
				<button
					key={page}
					className={`${isActive(page)}`}
					onClick={() => jump(page)}
				>
					{page}
				</button>
			))}
			<button onClick={next}>&raquo;</button>
		</div>
	)
}

export default memo(Pagination)
