import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { useGetPersonByIdQuery } from "../../people/services/peopleApi";

export default function FavouritesPage() {
  const ids = useSelector((state: RootState) => state.favourites.ids);

  if (ids.length === 0) {
    return <div style={{ padding: "20px" }}>No favourites yet.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Favourites</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {ids.map((id) => {
          const { data, isLoading } = useGetPersonByIdQuery(id);

          if (isLoading) return <div key={id}>Loading...</div>;

          return (
            <div key={id} style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px"
            }}>
              <h3>{data?.name}</h3>
              <img
                src={`https://picsum.photos/200?random=${id}`}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <p>Height: {data?.height} cm</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}