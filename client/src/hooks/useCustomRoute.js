import React from 'react'

const useCustomRoute = () => {
	const pushQuery = (query) => {
		console.log(query)
	}

	return { pushQuery }
}

export default useCustomRoute
