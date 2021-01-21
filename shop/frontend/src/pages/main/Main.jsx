import React from 'react'
import './main.css'
import Content from "../../components/content/Content";
import Header from "../../components/header/Header";

const Main = () => {
    return (
        <div className={'main layout'}>
            <Header />
            <Content />
        </div>
    )
}

export default Main
