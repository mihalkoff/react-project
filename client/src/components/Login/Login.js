export const Login = () => {
    return (
        <section id="contact" className="padd-section">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Login</h2>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="form">
                            <form className="contactForm">
                                <div className="form-group" style={{marginBottom: '1rem'}}>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group" style={{marginBottom: '1rem'}}>
                                    <input type="password" autocomplete="on" className="form-control" name="password" id="subject" placeholder="Password"/>
                                </div>
                                <div className="text-center" style={{marginBottom: '1rem'}}>
                                    <button className="btn btn-primary" type="submit">Sign in</button>
                                </div>
                            </form>
                            <p>Don't have an account yet?  <a href="/register">Register</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};