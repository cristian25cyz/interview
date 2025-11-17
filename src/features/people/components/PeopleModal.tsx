import { useNavigate } from "react-router-dom";
import { useGetPersonByIdQuery } from "../services/peopleApi";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../favourites/favouritesSlice";
import type { RootState } from "../../../app/store";

interface Props {
    id: string;
}

export function PeopleModal({id} : Props) {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useGetPersonByIdQuery(id);
    const closeModal = () => navigate(-1);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const favouriteIds = useSelector((state: RootState) => state.favourites.ids);
    const isFavourite = favouriteIds.includes(id);

    const handleAddFav = () => {
        dispatch(addFavourite(id));
    };   

    if(isLoading) return <div className="modal">Loading...</div>
    if(isError) return <div className="modal">Error loading person</div>

    return (
        <div className="modal" style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            background: "white",
            borderRadius: "8px",
            zIndex: 1000,
            width: "300px",
        }}>
            <h2>{data.name}</h2>
            <img 
            src={`https://picsum.photos/200?random=${id}`}
            style={{ width: "100%", borderRadius: "6px" }}
            />

            <p>Height: {data.height} cm</p>
            <p>Mass: {data.mass} kg</p>
            <p>Birth year: {data.birth_year}</p>
            <p>Films: {data.films.length}</p>
            <button onClick={closeModal} style={{marginTop: "10px"}}>Close</button>

            {isAuthenticated && (
            isFavourite ? (
                <button disabled style={{ marginTop: "10px", opacity: 0.6 }}>
                Already in favourites
                </button>
            ) : (
                <button onClick={handleAddFav} style={{ marginTop: "10px" }}>
                Add to favourites
                </button>
            )
            )}
        </div>
    );
}