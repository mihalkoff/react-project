import './create.css';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Create = () => {
    const { onCreateSubmit } = useContext(AuthContext);
    const { formValues, onChangeHandler, onSubmit } = useForm({
        title: '',
        author: '',
        publisher: '',
        imageUrl: '',
        price: '',
        description: '',
    }, onCreateSubmit);

    return (
        <section id="add-comics" className="padd-section">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Add new comics</h2>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="form">
                            <form className="contactForm" id="createComics" method="POST" onSubmit={onSubmit}>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        className="form-control" 
                                        id="title" 
                                        placeholder="Title"
                                        value={ formValues.title }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="text" 
                                        name="author" 
                                        className="form-control" 
                                        id="author" 
                                        placeholder="Author"
                                        value={ formValues.author }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="publisher" 
                                        id="publisher" 
                                        placeholder="Publisher"
                                        value={ formValues.publisher }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="text" 
                                        name="imageUrl" 
                                        className="form-control" 
                                        id="imageUrl" 
                                        placeholder="Upload picture..."
                                        value={ formValues.imageUrl }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="price" 
                                        id="price" 
                                        placeholder="Price"
                                        value={ formValues.price }
                                        onChange={ onChangeHandler }
                                    />
                                </div>
                                <div className="form-group bottom-space">
                                    <textarea 
                                        className="form-control" 
                                        name="description" 
                                        id="description" 
                                        rows="5" 
                                        placeholder="Description"
                                        value={ formValues.description }
                                        onChange={ onChangeHandler }
                                    >
                                    </textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Add comics</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};