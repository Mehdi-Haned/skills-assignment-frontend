import './Checkout.css'
import { Link } from 'react-router-dom';

function Checkout() {

    return (
        <Link to='/checkout'>
            <button type="button" className='Checkout'>
                Proceed to Checkout
            </button>
        </Link>
    )
}

export default Checkout;
