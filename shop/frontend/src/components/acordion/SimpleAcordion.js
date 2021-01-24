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

function SimpleAccordion() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Acordion  category={
                [
                    {acordionName: 'price', sortBy: 'По ціні', sortByLabel: 'sort_by_price'},
                    {acordionName: 'weight', sortBy: 'По вазі', sortByLabel: 'sort_by_weight'}
                ]
            }/>
        </div>
    );
}

export default SimpleAccordion
