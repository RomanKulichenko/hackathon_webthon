import React from "react";
import Acordion from "./Acordion";

function SimpleAccordion({sortValue}) {
    return (
        <div>
            <Acordion sortValue={()=>sortValue()} category={
                [
                    {acordionName: 'price', sortBy: 'За ціною', sortByLabel: 'order_by_price'},
                    {acordionName: 'weight', sortBy: 'За вагою', sortByLabel: 'order_by_weight'}
                ]
            }/>
        </div>
    );
}

export default SimpleAccordion
