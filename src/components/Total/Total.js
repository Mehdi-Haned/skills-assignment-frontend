import './Total.css';

function Total({ cost }) {

    const taxRate = 13

    return (
        <div>
            <h2>Total</h2>
            <div>cost: ${cost.toFixed(2)}</div>
            <div>Tax Rate: {taxRate}%</div>
            <div>Tax: ${(cost * taxRate/100).toFixed(2)}</div>
            <div>Total cost: ${(cost * (1 + taxRate/100)).toFixed(2)}</div>
        </div>
    )
}

export default Total;
