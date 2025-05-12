import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li className="mx-5">
                            <div>Logo</div>
                        </li>
                        <li className="mx-5">
                            <NavLink to="/" >Homepage</NavLink>
                        </li>
                        <li className="mx-5">
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}