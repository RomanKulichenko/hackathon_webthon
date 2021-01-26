import React from 'react'
import './card.css'

const Card = ({products}) => {
    let {
        image,
        id,
        title,
        link_to_shop,
        link_to_shop_logo,
        weight,
        price,
    } = products;

    const [integer_price, fraction_price] = price.split('.');

    return (
        <li className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 container" key={id}>
                <div className="product-header">
                    <div className="product-logo_wrapper">
                            <img className="product-logo_img card-img-top"
                                 src={image}
                                 alt="product-logo" className="product-logo"/>
                    </div>

                    <div className="product-title_block">
                        <div className="product-title">{title}</div>
                        <div className="product-weight">{weight}г</div>
                    </div>
                </div>

                <div className="product-footer">
                    <div className="product-price-container">
                        <div className="current-price">
                            <div className="current-integer">{integer_price}</div>
                            <div className="current-fraction">{fraction_price}</div>
                        </div>
                    </div>

                    <div className="product-wrapper">
                        <div className="shop-logo">
                            <img src={link_to_shop_logo}
                                 alt='shop_logo'/>
                        </div>

                        <div className="product-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.69 21.77" width="20" height="20">
                                <path fill="#ffffff"
                                      d="M24.53,4.83a.76.76,0,0,0-.59-.28H7.62c-.24-1.14-.41-2-.49-2.33A2.84,2.84,0,0,0,4.75, 0h-4A.76.76,0,0,0,0,.75a.76.76,0,0,0,.75.75H4.58a1.37,1.37,0,0,1,1.09,1C6,4,8.41,15.87,8.42,15.91a3.28,3.28, 0,0,0,1.94,2.29,2.19,2.19,0,0,0-.45,1.32,2.25,2.25,0,1,0,4.15-1.2h3.21a2.25,2.25,0,1,0,3.79,0H22a.75.75,0,0, 0,0-1.5H11.08c-.61,0-1-.65-1.11-1h9.88a3,3,0,0,0,3-2.57l1.81-7.77A.77.77,0,0,0,24.53,4.83ZM19.16,20.27a.75.75, 0,1,1,.75-.75A.75.75,0,0,1,19.16,20.27Zm-7,0a.75.75,0,1,1,.75-.75A.75.75,0,0,1,12.16,20.27ZM21.38,13a1.49,1.49, 0,0,1-1.55,1.34H9.62C9.24,12.44,8.5,8.86,7.93,6.05H23Z"
                                      className="svg"></path>
                            </svg>
                            <a href={link_to_shop} target="_blank">
                                <span className="product-button_title">До магазину</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </li>
)
}

export default Card
