import React, {useContext, useState} from 'react'
import './sideBar.css';
import SimpleAccordion from "../acordion/SimpleAcordion";
import BasicTextFields from "../input/Input";
import {Context} from '../../Context.js'
import axios from "axios";


let url = 'http://localhost:8000/api/v1/products/buckwheat/'
const SideBar = () => {
    const [products, setProduct] = useContext(Context);

    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        axios({
            method: "GET",
            url: `${url}?search_by_title=${text}`
        }).then(res => {
            setProduct(res.data)
        })
        console.log(e.target)
    }

    return (
        <div className="col-lg-3 sideBar navbar-expand-lg">
            <form onSubmit={onSubmit}>
                <BasicTextFields setText={setText}/>
                <h3 className={'sortedTitle'}>Сортувати</h3>
                <div className="list-group">
                    <SimpleAccordion/>
                </div>
            </form>
        </div>
    )
}

export default SideBar
