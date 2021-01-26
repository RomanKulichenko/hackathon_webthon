import React, {useContext, useEffect, useState} from 'react'
import './sideBar.css';
import SimpleAccordion from "../acordion/SimpleAcordion";
import BasicTextFields from "../input/Input";
import {Context} from '../../Context.js'
import axios from "axios";


let url = 'http://localhost:8000/api/v1/products/buckwheat/'
const SideBar = () => {
    const [, setProduct] = useContext(Context);

    const [text, setText] = useState('');
    const [sortValue, setSortValue] = useState('');

    useEffect(()=>{
        console.log(1)

        axios({
                    method: "GET",
                    url: `${url}?${text ? `search=${text}&` : ''}${sortValue}`
                }).then(res => {
                    setProduct(res.data)
        })
    }, [sortValue]);

    const handleSearchLive = (e) => {
        console.log(e)
            e.preventDefault();
            axios({
                method: "GET",
                url: `${url}?${!!text ? `search=${e.target.value}&` : ''}${!!sortValue ? sortValue: ''}`
            }).then(res => {
                setProduct(res.data)
            })
    };

    return (
        <div className="col-lg-3 sideBar navbar-expand-lg">
            <form onChange={handleSearchLive}>
                <BasicTextFields setText={setText} />
                <h3 className={'sortedTitle'}>Сортувати</h3>
                <div className="list-group">
                    <Context.Provider value={[sortValue, setSortValue]}>
                        <SimpleAccordion/>
                    </Context.Provider>
                </div>
            </form>
        </div>
    )
}

export default SideBar
