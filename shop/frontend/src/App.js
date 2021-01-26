import './App.css';
import Main from "./pages/main/Main";
import {useEffect, useState} from "react";
import Loader from "./components/loader/Loader";
import axios from "axios";
import { Context } from "./Context";

function App() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8000/api/v1/products/buckwheat/?order_by_weight=low_to_high"
        }).then(res => {
            setProduct(res.data)
        })
    }, []);

    return (
        <Context.Provider value={[products, setProduct]}>
            <div className="app">
                {products ? <Main/> : <Loader />}
            </div>
        </Context.Provider>
    );
}

export default App;
