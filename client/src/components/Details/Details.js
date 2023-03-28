import './details.css';

export const Details = () => {
    return (
        <section id="about-us" className="about-us padd-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-3">
                        <img className="bottom-space" alt="About" src="https://firebasestorage.googleapis.com/v0/b/first-react-project-8439a.appspot.com/o/images%2F51suSxpPVLL._AC_SY580_.jpg?alt=media&amp;token=f0453735-ebc9-4ac4-a5cc-26019d968e15"/>
                        <div className="table_btn text-center">
                            <button className="btn btn-info">Buy</button>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <div className="about-content">
                            <h2><span>When I am Angry</span></h2>
                            <p>Did you know that anger isn't all bad?Teach children to identify their anger signsAnger is a normal, healthy emotion.Teaching your kids to deal with disappointmentSolutions that help kids handle their hot feelings in healthier ways</p>
                            <ul className="list-unstyled">
                                <li>Author:  Michael Gordon</li>
                                <li>Universe: Marvel</li>
                                <li>Price:  10 euro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};