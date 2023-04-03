import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section id="hero">
            <div className="hero-container" data-aos="fade-in">
                <h1>Welcome to Comics Store</h1>
                <img src="/img/cover.jpg" alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100" />
                <Link to="/catalog" className="btn-get-started scrollto">Catalog</Link>
            </div>
        </section>
    );
};