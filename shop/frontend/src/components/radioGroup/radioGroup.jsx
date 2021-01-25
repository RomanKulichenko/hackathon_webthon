import React, {useContext, useEffect, useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import orange from "@material-ui/core/colors/orange";
import withStyles from "@material-ui/core/styles/withStyles";
import '../acordion/acordion.css'
import axios from "axios";
import {Context} from '../../Context.js';

export function RadioButtonsGroup({ariaLabel, acordionName}) {
    const OrangeRadio = withStyles({
        root: {
            color: [400],
            '&$checked': {
                color: orange[600],
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    const [value, setValue] = useState('descending');
    const [products, setProduct] = useContext(Context);

    let baseUrl = 'http://localhost:8000/api/v1/products/buckwheat/';

    const handleChange = (event) => {
        setValue(event.target.value);
        let url
        if (event.target.name == 'price') {

            if (event.target.value === 'ascending') url = `${baseUrl}?order_by_price=high_to_low`
            if (event.target.value === 'descending') url = `${baseUrl}?order_by_price=low_to_high`
        }
        if (event.target.name === 'weight') {
            if (event.target.value === 'ascending') url = `${baseUrl}?order_by_weight=high_to_low`
            if (event.target.value === 'descending') url = `${baseUrl}?order_by_weight=low_to_high`
        }
        axios({
            method: "GET",
            url: url
        }).then(res => {
            setProduct(res.data)
        })
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label={ariaLabel} name={acordionName} value={value} onChange={handleChange}
                        className={'block'}>
                <FormControlLabel value="ascending" control={<OrangeRadio/>} label="Від більшого до меншого"/>
                <FormControlLabel value="descending" control={<OrangeRadio/>} label="Від меншого до більшого"/>
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonsGroup
