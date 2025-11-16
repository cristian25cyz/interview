import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/authApi";
import { loginSuccess } from "../authSlice";

export function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await loginRequest(email, password);
            dispatch(loginSuccess(response));
            navigate('/'); // here i redirect the page after login
        } catch(err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
        onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "250px",
        }}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            { error && <div style={{ color: "red" }}>{error}</div> }
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    )
}