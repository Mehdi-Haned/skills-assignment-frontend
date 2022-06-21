import './Total.css';
import { useState } from 'react';

function Total({ cost }) {

    const [ totalContents, setTotalContents ] = useState(null);
    const [ count, setCount ] = useState(0);

    const taxRate = 13

    const showTotal = () => {
        if (count % 2 === 0) {
            setTotalContents({
                gross: cost,
                net: cost + (cost * (taxRate / 100))   
            });
        } else {
            setTotalContents(null);
        }
        setCount(() => count + 1);
    }

    return (
        <div>
        <h2>Total</h2>
        <button className="Total" onClick={showTotal}>More Details</button>
        {totalContents && (
            <div>
                <div>Gross Price: ${totalContents.gross.toFixed(2)}</div>
                <div>Tax: {taxRate}%</div>
                <div>Net Price: ${totalContents.net.toFixed(2)}</div>
            </div>
        )}
        </div>
    )
}

export default Total;
