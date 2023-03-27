import React from "react";
import logo from './logo.png'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className="logo" src={logo} alt="GamerCompra"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='lista navbar-nav'>
                            <li className='item'>Inicio</li>
                            <li className='item'>Componentes</li>
                            <li className='item'>Notebooks</li>
                            <li className='item'>Accesorios</li>
                        </ul>
                        <CartWidget/>

                    </div>
                    
                    
                </div>
                
            </nav>
        
        
        
        
    );
};

export default NavBar;
