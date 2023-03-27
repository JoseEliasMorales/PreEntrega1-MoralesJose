import React from 'react'
import carrito from './carrito.png'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <>
            <img className='carrito' src={carrito} alt="carrito"/>
            <strong>1</strong>
        </>
    )
}

export default CartWidget