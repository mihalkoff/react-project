import './details.css';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { comicsServiceFactory } from '../../services/comicsService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const Details = () => {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const { comicsId } = useParams();
    const [comics, setComics] = useState({});
    const comicsService = useService(comicsServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        comicsService.getOne(comicsId)
            .then(result => {
                setComics(result);
            })
    }, [comicsId]);

    const isOwner = comics._ownerId === userId;

    const onDeleteClick = async () => {
        await comicsService.delete(comics._id);

        // setComics(state => state.filter(x => x._id !== comics._id));

        navigate('/catalog');
    };

    return (
        <section id="about-us" className="about-us padd-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-3">
                        <img className="bottom-space" alt={comics.title} src={comics.imageUrl}/>
                        <div className="table_btn text-center">
                            <button className="btn btn-info">Buy</button>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <div className="about-content">
                            <h2><span>{comics.title}</span></h2>
                            <p>{comics.description}</p>
                            <ul className="list-unstyled">
                                <li>Author:  {comics.author}</li>
                                <li>Publisher: {comics.publisher}</li>
                                <li>Price:  {comics.price} euro</li>
                            </ul>

                            {isOwner && (
                                <div id="edit-delete">
                                    <Link to={`/catalog/${comics._id}/edit`} class="btn btn-info editButton">Edit</Link>
                                    <button type="button" class="btn btn-info deleteButton" onClick={onDeleteClick}>Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};