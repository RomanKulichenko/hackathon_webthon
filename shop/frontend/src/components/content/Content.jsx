import React from 'react'
import './content.css'
import Cards from "../cards/Cards";
import SideBar from "../sidebar/SideBar";

const Content = ({products}) => {
    return (
        <div className={'container'}>
            <div className={'content'}>
                <SideBar />
                <Cards products={products}/>
            </div>
        </div>
    )
}

export default Content
