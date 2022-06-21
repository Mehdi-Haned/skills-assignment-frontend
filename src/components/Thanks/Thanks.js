import { useEffect } from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';

function Thanks({ setCost }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h1 className="Thanks">Thank you for shopping at Cobalt Hardware!</h1>
            {setCost(0)}
            <Link to='/'>
                <button className="Button">
                    Back
                </button>
            </Link>
        </div>
    )
}

export default Thanks;
