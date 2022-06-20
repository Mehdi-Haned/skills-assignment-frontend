import { useState, useEffect } from "react";
import ItemListElement from "./ItemListElement";

function ItemsList({ cost, setCost }) {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const HandleClearCart = (event) => {
        setCost(0.0)
    };

    return(
        <>
            <h2>Items:</h2>
            {
                items.map((item) => (
                    <ItemListElement key={item.id} item={item} cost={cost} setCost={setCost}/>
                ))
            }
            <br></br>
            <button onClick={HandleClearCart}>clear cart</button>
        </>
    );
};

export default ItemsList