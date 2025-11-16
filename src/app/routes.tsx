import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeoplePage from "../features/people/pages/PeoplePage";
import LoginPage from "../features/auth/pages/LoginPage";
import FavouritesPage from "../features/favourites/pages/FavouritesPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<PeoplePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="favourites" element = {<FavouritesPage/>} />
            </Routes>
        </BrowserRouter>
    )
}