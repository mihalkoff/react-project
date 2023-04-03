import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div id="logo">
            <h1><Link to="/"><span>Comics</span> Store</Link></h1>
        </div>
    );
}