import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className="header__wrapper">
            <div className="header-logo">
                <a link="#home" className='header-logo'>WebThon</a>
            </div>
            <div className="header-menu">
                <nav>
                    <ul>
                        <li><a href="#products">Продукти</a></li>
                        <li><a href="#contact">Зв'яжіться з нами</a></li>
                        <li><a href="#about">Про наc</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
