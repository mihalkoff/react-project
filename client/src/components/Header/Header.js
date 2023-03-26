import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};