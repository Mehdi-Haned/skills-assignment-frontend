import './ItemList.css';
import useCollapse from 'react-collapsed';

function ItemListElement({ item, cost, setCost }) {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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

    return(
        <>
            <tr>
                <td>
                    <label className="container">
                        <input type="checkbox" value={item.cost} onChange={HandleCheck}/>{item.name}
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td className="wider"></td>
                <td>${price}</td>
                <td><button className="SeeMore" {...getToggleProps()}>
                        {isExpanded ? 'Less Details' : 'More Details'}
                    </button>
                </td>
            </tr>
        <div {...getCollapseProps()}>
            <div>
                Price: ${item.cost}<br></br>
                Brand: {item.brand}<br></br>
                Number in stock: {item.stock}
            </div>   
            
        </div>     
        </>
    )
};

export default ItemListElement;