import { useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form style={{
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
            
            <button type="submit">Login</button>
        </form>
    )
}