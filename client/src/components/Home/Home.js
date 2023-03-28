export const Home = () => {
    return (
        <section id="hero">
            <div className="hero-container" data-aos="fade-in">
                <h1>Welcome to Comics Store</h1>
                <img src="/img/cover.jpg" alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100" />
                <a href="/catalog" className="btn-get-started scrollto">Catalog</a>
            </div>
        </section>
    );
};