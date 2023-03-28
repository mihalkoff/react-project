export const Navigation = () => {
    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/catalog">Comics catalog</a></li>
                <li><a className="nav-link" href="/create">Add comics</a></li>
                <li><a className="nav-link" href="/login">Login</a></li>
                <li><a className="nav-link" href="/register">Register</a></li>
                <li><a className="nav-link" href="/logout">Logout</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
};