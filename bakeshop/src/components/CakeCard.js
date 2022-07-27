import React, {useState} from 'react';

export default function CakeCard({ cake, onAddToCart }) { 
        const { name, image, price, description } = cake
        

    return (
        <div className='card'>
            <div className="col">
                <h3>{name}</h3>
                <img src={image} width="400" height="350" alt=""/>
                <p>${(price/100).toFixed(2)}</p>            
                <p>{description}</p>
            
                <button onClick={() => onAddToCart(cake)}>
                    Add To Cart
                </button> 
            </div>


          <br />          
        </div>
        
      
    )
}