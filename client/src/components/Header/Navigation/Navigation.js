import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/catalog">Catalog</Link></li>
                <li><Link className="nav-link" to="/create">Add comics</Link></li>
                <li><Link className="nav-link" to="/login">Login</Link></li>
                <li><Link className="nav-link" to="/register">Register</Link></li>
                <li><Link className="nav-link" to="/logout">Logout</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
};