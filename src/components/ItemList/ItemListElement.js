import { useState } from "react"

function ItemListElement({ item, cost, setCost }) {
    
    const HandleCheck = (event) => {

        if (event.target.checked) {
            setCost(cost + parseFloat(event.target.value));
        } else {
            setCost(cost - parseFloat(event.target.value));
        }
    };

    return(
        <>
            <div>
                <input type="checkbox" value={item.cost} onChange={HandleCheck}/>
                {item.name} &nbsp; - &nbsp; {item.cost}$
            </div>
        </>
    )
};

export default ItemListElement;