import React from 'react'
import './button.css'

const Button = ({title}) => {
    return (
        <button className={'button load-more-items__btn'}>
            <span>{title}</span>
        </button>
    )
}

export default Button
