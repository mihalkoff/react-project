import './create.css';

export const Create = () => {
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
                            <form className="contactForm">
                                <div className="form-group bottom-space">
                                    <input type="text" name="title" className="form-control" id="name" placeholder="Title" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value=""/>
                                </div>
                                <div className="form-group bottom-space">
                                    <input type="text" name="author" className="form-control" id="subject" placeholder="Author" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value=""/>
                                </div>
                                <div className="form-group bottom-space">
                                    <input type="number" className="form-control" name="age" id="email" placeholder="Age" data-rule="minlen:1" data-msg="Please enter a valid age" value=""/>
                                </div>
                                <div className="form-group bottom-space">
                                    <textarea className="form-control" name="description" rows="5" data-rule="required" data-msg="Please write something for the book" placeholder="Description"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};