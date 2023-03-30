import './login.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

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
                            <form id="login" method="POST" className="contactForm" onSubmit={onSubmit}>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" id="email" 
                                        placeholder="Your Email"
                                        value={ formValues.email }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        id="login-password" 
                                        placeholder="Password"
                                        value={ formValues.password }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="text-center bottom-space">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                            </form>
                            <p>If you don't have profile click <a href="/register">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};