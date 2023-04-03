import './register.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import { Link } from "react-router-dom";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

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
                            <form id="register" method="POST" className="contactForm" onSubmit={onSubmit}>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Your Email"
                                        value={ formValues.email }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="password" 
                                        autoComplete="on" 
                                        className="form-control" 
                                        name="password" 
                                        id="register-password" 
                                        placeholder="Password"
                                        value={ formValues.password }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="password" 
                                        autoComplete="on" 
                                        className="form-control" 
                                        name="confirmPassword" 
                                        id="confirm-password" 
                                        placeholder="Confirm Password"
                                        value={ formValues.confirmPassword }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="text-center bottom-space">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                            <p>If you already have profile click <Link to="/login">here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};