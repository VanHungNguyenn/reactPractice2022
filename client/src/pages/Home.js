import React, { useState, useEffect, useMemo } from 'react'
import Pagination from '../components/Pagination'
import Products from '../components/Products'
import Sorting from '../components/Sorting'
import useQuery from '../hooks/useQuery'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const [products, setProducts] = useState([])
	const [limit, setLimit] = useState(5)

	const { search } = useLocation()

	const { page, sort } = useMemo(() => {
		const page = new URLSearchParams(search).get('page') || 1
		const sort = new URLSearchParams(search).get('sort') || '-createdAt'

		return {
			page: parseInt(page),
			sort,
		}
	}, [search])

	const { data, loading, error } = useQuery(
		`/products?limit=${limit}&page=${page}&sort=${sort}`
	)
	useEffect(() => {
		if (data?.products) {
			setProducts(data.products)
		}
	}, [data?.products])

	const totalPages = useMemo(() => {
		if (!data?.count) return 0
		return Math.ceil(data.count / limit)
	}, [data?.count, limit])

	return (
		<>
			<Sorting page={page} sort={sort} />
			<Products products={products} />
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			<Pagination totalPages={totalPages} page={page} sort={sort} />
		</>
	)
}

export default Home
