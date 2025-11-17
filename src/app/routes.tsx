import { Routes, Route } from "react-router-dom";
import PeoplePage from "../features/people/pages/PeoplePage";
import LoginPage from "../features/auth/pages/LoginPage";
import FavouritesPage from "../features/favourites/pages/FavouritesPage";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element = {<PeoplePage/>} />
            <Route path="/people/:id" element={<PeoplePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/favourites" 
            element = {
                <ProtectedRoute>
                    <FavouritesPage/>
                </ProtectedRoute>
            } />
        </Routes>
    
    )
}