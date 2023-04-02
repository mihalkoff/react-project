import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const Navigation = () => {
    const { token } = useContext(AuthContext);

    return (
        <nav id="navbar" className="navbar">
            <ul>
                {token && <li>Hello, user!</li>}
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/catalog">Catalog</Link></li>
                {token ? (
                    <>
                        <li><Link className="nav-link" to="/create">Add comics</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </>)
                    :
                    (<>
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/register">Register</Link></li>
                    </>)
                }
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
};