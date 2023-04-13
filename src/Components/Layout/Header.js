import React from 'react';
import './Header.css'
import Cart from '../Cart/Cart';

function Header(props){
    return(
        <div className='header'>
            <div className='fixedBack'>
            <div className='header-title'>
                <h2>React Meals</h2>
                <Cart onShow={props.onShow} />
            </div>
            </div>
        </div>
    )
}

export default Header