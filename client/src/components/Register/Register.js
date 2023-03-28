import './register.css';

export const Register = () => {
    return (
        <section id="contact" className="padd-section">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Register</h2>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="form">
                            <form className="contactForm">
                                <div className="form-group bottom-space">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group bottom-space">
                                    <input type="password" autocomplete="on" className="form-control" name="password" id="register-password" placeholder="Password"/>
                                </div>
                                <div className="form-group bottom-space">
                                    <input type="password" autocomplete="on" className="form-control" name="confirm-password" id="confirm-password" placeholder="Confirm Password"/>
                                </div>
                                <div className="text-center bottom-space">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                            <p>If you already have profile click <a href="/login">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};