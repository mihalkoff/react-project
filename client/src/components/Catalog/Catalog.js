import './catalog.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
    const { comics } = useContext(AuthContext);

    return (
        <section id="blog" className="padd-section">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Catalog</h2>
                </div>
            </div>
            <div className="container">
                {comics.length ? (
                        <div className="row">
                            {comics.map(x =>
                                <CatalogItem key={x._id} {...x} />
                            )}
                        </div>
                    )
                    :
                    (<h1 className="text-center">No comics yet</h1>)
                }
            </div>
        </section>
    );
};