import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import type { RootState } from "../../app/store";
import type { JSX } from "react";

/**
 * If the user is not loged in I send him  to the requested page, if he is loged in he can see the page
 * 
 */
export function ProtectedRoute({ children }: {children: JSX.Element}) {

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    const location = useLocation();
    if(!isAuthenticated) {
        return <Navigate to={`/login?next=${location.pathname}`} replace />
    }

    return children;
}