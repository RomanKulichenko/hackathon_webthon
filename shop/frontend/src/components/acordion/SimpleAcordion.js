import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Acordion from "./Acordion";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function SimpleAccordion({sortValue}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Acordion sortValue={()=>sortValue()} category={
                [
                    {acordionName: 'price', sortBy: 'За ціною', sortByLabel: 'sort_by_price'},
                    {acordionName: 'weight', sortBy: 'За вагою', sortByLabel: 'sort_by_weight'}
                ]
            }/>
        </div>
    );
}

export default SimpleAccordion
