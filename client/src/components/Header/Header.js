export const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div id="logo">
                    <h1><a href="index.html"><span>e</span>Startup</a></h1>
                </div>

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
            </div>
        </header>
    );
};