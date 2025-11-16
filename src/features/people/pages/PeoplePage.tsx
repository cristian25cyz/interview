import { useState } from "react";
import { useGetPeopleQuery } from "../services/peopleApi";

export default function PeoplePage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetPeopleQuery(page);

  if (isLoading) return <div>Loading people...</div>;
  if (isError) return <div>Error loading data.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Star Wars Characters</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {data.results.map((person: any, index: number) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={`https://picsum.photos/200?random=${index + page}`}
              alt={person.name}
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <h3>{person.name}</h3>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage((p) => p + 1)} disabled={!data.next}>
          Next
        </button>
      </div>
    </div>
  );
}