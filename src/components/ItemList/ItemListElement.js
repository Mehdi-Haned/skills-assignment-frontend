import { useState } from "react"

function ItemListElement({ item, cost, setCost }) {
    
    const [ itemDetails, setItemDetails ] = useState(null)
    const [ visible, setVisible ] = useState(true) //if true, then when you press the button, details appear
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
            <tr>
                <td><input type="checkbox" value={item.cost} onChange={HandleCheck}/>{item.name}</td>
                <td className="wider"></td>
                <td>${price}</td>
                <td><button onClick={HandleClick}>More details</button></td>
            </tr>
            {itemDetails  && (
                    <tr>
                    Price: ${itemDetails.cost}<br></br>
                    Brand: {itemDetails.brand}<br></br>
                    Number in stock: {itemDetails.stock}
                    </tr>
                )}
        </>
    )
};

export default ItemListElement;