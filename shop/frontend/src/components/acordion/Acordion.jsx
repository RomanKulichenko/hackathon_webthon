import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioButtonsGroup from "../radioGroup/radioGroup";


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

    const classes = useStyles();
    return (
        <div>
            {
                category.map(el => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>{el.sortBy}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.heading}>
                                    <RadioButtonsGroup ariaLabel={el.sortByLabel} acordionName ={el.acordionName} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}



