import { Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';

export function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
        <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Link to="/">People</Link>
                <Link to="/favourites">Favourites</Link>
                {!isAuthenticated && <Link to="/login">Login</Link>}

                {isAuthenticated && (
                    <>
                        <span>Logged in as {user?.name}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </nav>
        </header>
    )
}