import React from 'react'
import p1 from '../assets/images/p1.jpg'
const Card = () => {
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className='border m-4 p-4'><img src={p1}/></figure>
  <div className="card-body">
    <h2 className='card-title'>Price: 100$</h2>
    <h2 className="card-title">Tshirt!</h2>
    <p>If a cat smells t-shirt whose does he smell?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">AdD to Cart</button>
    </div>
  </div>
</div>
  )
}

export default Card