import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioButtonsGroup from "../radioGroup/radioGroup";
import {Context} from "../../Context";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Acordion({category}) {
    const [one, two]=category;
    const [closeCategory, setCloseCategory]= useState(false);
    const [closeCategoryTwo, setcloseCategoryTwo]= useState(false);
    const [sortValue, setSortValue] = useContext(Context);
    const [active, setActive] = useState('');

    const handleClick = (e)=>{
        const val = e.target.value;
        setActive(val);
        setSortValue(val);
    };

    return (
        <div>
            <div>
                <p onClick={()=>{
                    setCloseCategory(!closeCategory)}}>{one.sortBy}</p>
                {
                    closeCategory &&
                    <div>
                        <label  form={one.acordionName}>
                            <input name="typeSort"  type="radio" onChange={handleClick} checked={active === `${one.sortByLabel}=high_to_low`}
                                   id={one.acordionName} value={`${one.sortByLabel}=high_to_low`} defaultChecked={false}/>
                            Від вищої до найнижчої</label>
                        <label form={one.acordionName}>
                            <input checked={active === `${one.sortByLabel}=low_to_high`} onChange={handleClick} name="typeSort" id={one.acordionName} value={`${one.sortByLabel}=low_to_high`} type="radio" id={one.acordionName} defaultChecked={false}/>
                            Від нижчої до вищої </label>
                    </div>
                }
            </div>

            <div>
                <p onClick={()=>{
                    setcloseCategoryTwo(!closeCategoryTwo)}}>{two.sortBy}</p>
                {
                    closeCategoryTwo &&
                    <div>
                        <label  form={two.acordionName}>
                            <input name="typeSort"  type="radio" onChange={handleClick} checked={active === `${two.sortByLabel}=high_to_low`}
                                   id={two.acordionName} value={`${two.sortByLabel}=high_to_low`} defaultChecked={false}/>
                            Від вищої до найнижчої</label>
                        <label form={two.acordionName}>
                            <input checked={active === `${two.sortByLabel}=low_to_high`} onChange={handleClick} name="typeSort" id={two.acordionName} value={`${two.sortByLabel}=low_to_high`} type="radio" id={two.acordionName} defaultChecked={false}/>
                            Від нижчої до вищої </label>
                    </div>
                }
            </div>

            {/*{*/}
            {/*    */}
            {/*    */}
            {/*    */}
            {/*    // category.map(el=> <InputSort data={el}/>)*/}

            {/*    // category.map(el => {*/}
            {/*    //     return (*/}
            {/*    //         <Accordion>*/}
            {/*    //          /!*<AccordionSummary*!/*/}
            {/*    //             /!*    expandIcon={<ExpandMoreIcon/>}*!/*/}
            {/*    //             /!*    aria-controls="panel1a-content"*!/*/}
            {/*    //             /!*    id="panel1a-header"*!/*/}
            {/*    //             /!*>*!/*/}
            {/*    //             /!*    <Typography className={classes.heading}>{el.sortBy}</Typography>*!/*/}
            {/*    //             /!*</AccordionSummary>*!/*/}
            {/*    //             /!*<AccordionDetails>*!/*/}
            {/*    //             /!*    <Typography className={classes.heading}>*!/*/}
            {/*    //             /!*        <RadioButtonsGroup ariaLabel={el.sortByLabel} acordionName ={el.acordionName} />*!/*/}
            {/*    //             /!*    </Typography>*!/*/}
            {/*    //             /!*</AccordionDetails>*!/*/}
            {/*    //         </Accordion>*/}
            {/*    //     )*/}
            {/*    // })*/}
            {/*}*/}
        </div>
    )
}



