import React from 'react'
import './content.css'
import Cards from "../cards/Cards";
import SideBar from "../sidebar/SideBar";

const Content = () => {
    return (
        <div className={'container'}>
            <div className={'content'}>
                <SideBar />
                <Cards />
            </div>
        </div>
    )
}

export default Content
