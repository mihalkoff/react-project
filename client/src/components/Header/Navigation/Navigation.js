export const Navigation = () => {
    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="/">Home</a></li>
                <li><a className="nav-link scrollto" href="/catalog">Comics catalog</a></li>
                <li><a className="nav-link scrollto" href="/create">Add comics</a></li>
                <li><a className="nav-link scrollto" href="/login">Login</a></li>
                <li><a className="nav-link scrollto" href="/register">Register</a></li>
                <li><a className="nav-link scrollto" href="/logout">Logout</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
};