import React from 'react'
import './main.css'
import Content from "../../components/content/Content";

const Main = () => {
    return (
        <div className={'main layout'}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Main
