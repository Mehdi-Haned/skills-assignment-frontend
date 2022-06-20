import { useState } from "react"

function ItemListElement({ item, cost, setCost }) {
    
    const [ itemDetails, setItemDetails ] = useState(null)
    const [ visible, setVisible ] = useState(true)
    const price = item.cost
    
    const HandleCheck = (event) => {
        const extraPrice = item.cost
        
        if (item.stock <= 0) {
            event.target.checked = false
            alert("Sorry, we are out of stock");
        } else if (event.target.checked) {
            setCost(cost + parseFloat(extraPrice));
        } else {
            setCost(cost - parseFloat(extraPrice));
        }
    };

    const HandleClick = (event) => {
        if (visible) {
            fetch(`https://we-accelerate-group199-backend.herokuapp.com/api/v1/items/${item.id}`)
            .then(res => res.json())
            .then(res => setItemDetails(res))
            setVisible(false)
        } else {
            setVisible(true)
            setItemDetails(null)
        }
    
    };

    return(
        <>
            <div>
                <input type="checkbox" value={item.cost} onChange={HandleCheck}/>
                {item.name} &nbsp; - &nbsp; {price}$ &nbsp; &nbsp;
                <button onClick={HandleClick}>More details</button>
                {itemDetails  && (
                    <div>
                        <h3>Details:</h3>
                        <div>Price: {itemDetails.cost}$</div>
                        <div>Brand: {itemDetails.brand}</div>
                        <div>Number in stock: {itemDetails.stock}</div>
                    </div>
                )}
            </div>
        </>
    )
};

export default ItemListElement;