import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
    price,
}) => {
    return (
        <div className="col-md-6 col-lg-4 item-bottom">
            <div className="block-blog text-left">
                <Link to={`/catalog/${_id}`}><img src={imageUrl} className="img-responsive" alt={title} /></Link>
                <div className="content-blog">
                    <h4><Link to={`/catalog/${_id}`}>{title}</Link></h4>
                    <span>{price} Euro</span>
                    <button className="pull-right btn btn-info">Buy</button>   
                </div>
            </div>
        </div>
    );
}

