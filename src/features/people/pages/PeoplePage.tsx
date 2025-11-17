import { useState } from "react";
import { useGetPeopleQuery } from "../services/peopleApi";
import { useParams, useNavigate } from "react-router-dom";
import { PeopleModal } from "../components/PeopleModal";
import '../pages/PeoplePage.scss';

export default function PeoplePage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetPeopleQuery(page);
  const params = useParams();
  const navigate = useNavigate();
  const modalId = params.id;

  const extractId = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }

  if (isLoading) return <div>Loading people...</div>;
  if (isError) return <div>Error loading data.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Star Wars Characters</h2>

      <div className="people-grid">
        {data.results.map((person: any) => {
          const id = extractId(person.url);

          return (
          <div
            onClick={() => navigate(`/people/${id}`)}
            key={id}
            className="person-card"
          >
            <img
              src={`https://picsum.photos/200?random=${id}`}
              alt={person.name}
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <h3>{person.name}</h3>
          </div>
          )
})}
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
      {modalId && <PeopleModal id={modalId}/>}
    </div>
  
  );
}