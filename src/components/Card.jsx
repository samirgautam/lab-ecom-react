import React from 'react'
// import p1 from '../assets/images/p1.jpg'
const Card = () => {
  return (


<div className="max-w-2xl mx-auto">


	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img className="rounded-t-lg p-8" src="https://flowbite.com/docs/images/products/product-1.png" alt="product image"/>
        </a>
			<div className="px-5 pb-5">
				<a href="#">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Apple Watch Series 7
						GPS, Aluminium Case, Starlight Sport</h3>
				</a>
				<div className="flex items-center mt-2.5 mb-5">
        Description
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
					<a href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</a>
				</div>
			</div>
	</div>

</div>
  )
}

export default Card