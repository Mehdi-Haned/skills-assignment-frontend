import './Total.css';

function Total({ cost }) {

    const taxRate = 13

    return (
        <div>
            <h2 className='Title'>Total</h2>
            <div className='Total'>
                <div>Gross Price: ${cost.toFixed(2)}</div>
                <div>Tax Rate: {taxRate}%</div>
                <div>Tax: ${(cost * taxRate/100).toFixed(2)}</div>
                <div>Net Price: ${(cost * (1 + taxRate/100)).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Total;
