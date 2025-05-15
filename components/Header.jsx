import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="d-flex">
                    <ul className="nav">
                        <li className="nav-item fw-bold">
                            <NavLink to="/" className="nav-link">Logo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active fw-bold" aria-current="page" >Homepage</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies" className="nav-link fw-bold">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}