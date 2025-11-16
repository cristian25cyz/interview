import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <nav style={{ display: "flex", gap: "20px" }}>
                <Link to="/">People</Link>
                <Link to="/favourites">Favourites</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}