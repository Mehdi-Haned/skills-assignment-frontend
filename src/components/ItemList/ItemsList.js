import { useState, useEffect } from "react";
import ItemListElement from "./ItemListElement";
import './ItemList.css';

function ItemsList({ cost, setCost }) {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch('https://we-accelerate-group199-backend.herokuapp.com/api/v1/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return(
        <>
            {
                items.map((item) => (
                    <ItemListElement key={item.id} item={item} cost={cost} setCost={setCost}/>
                ))
            }
        </>
    );
};

export default ItemsList