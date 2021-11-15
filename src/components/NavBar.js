
import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}


