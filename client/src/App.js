import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Test from './pages/Test'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Home />} />
				<Route path='/products/:id' element={<ProductDetail />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</>
	)
}

export default App
