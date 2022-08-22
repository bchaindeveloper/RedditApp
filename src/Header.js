import React from 'react';
import './Header.css';
export default function Header() {
    return (
        <div className='Header'>
            <div className='header_left'>
                <ul>
                    <li><a href='/r/popular' className='active'>Popular</a></li>
                    <li><a href='/r/hot' className='active1'>Hot</a></li>
                    <li><a href='/r/rising' className='active2'>Rising</a></li>
                    <li><a href='/r/controversial' className='active3'>Controversial</a></li>
                    <li><a href='/r/gilded' className='active4'>Gilded</a></li>
                </ul>
            </div>
            <div className='header_right'>
                <i className='fas fa-bell'></i>
                <img className="avatar" src="/images/Avatar.png"/>
                <div className='header_user'>
                    <span>Amir Vhora</span>
                    <i className='fas fa-caret-down'></i>

                </div>

            </div>
            
        </div>
    )
}