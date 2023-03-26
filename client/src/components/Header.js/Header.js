export const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div id="logo">
                    <h1><a href="index.html"><span>e</span>Startup</a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about-us">About</a></li>
                        <li><a className="nav-link scrollto" href="#features">Features</a></li>
                        <li><a className="nav-link scrollto" href="#screenshots">Screenshots</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};