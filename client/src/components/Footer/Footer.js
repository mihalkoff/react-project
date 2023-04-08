import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-lg-4">
                        <div className="footer-logo">
                            <Link className="navbar-brand" to="/">Comics Store</Link>
                            <p>Comics Store is the world’s largest and best-known science fiction, fantasy and cult entertainment retailer. We specialise in selling action figures, books, comics, graphic novels, toys and games and we offer all the best merchandise from your favourite series.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-2">
                        <div className="list-menu">
                            <h4>All links</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/catalog">Catalog</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyrights">
                <div className="container">
                    <p>&copy; Copyrights eStartup. All rights reserved.</p>
                    <div className="credits">
                        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};