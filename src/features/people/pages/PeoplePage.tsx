import { useState, useCallback } from "react";
import { useGetPeopleQuery } from "../services/peopleApi";
import { useParams } from "react-router-dom";

import { PeopleModal } from "../components/PeopleModal";
import { PeopleCard } from "./PeopleCard";
import { Loader } from "../../../shared/components/Loader";
import { extractId } from "../../../shared/components/extractId";

import "../pages/PeoplePage.scss";

export default function PeoplePage() {
  const [page, setPage] = useState(1);
  const params = useParams();
  const modalId = params.id;

  const { data, isLoading, isError } = useGetPeopleQuery(page);

  const goNext = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading data.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Star Wars Characters</h2>

      <div className="people-grid">
        {data.results.map((person: any) => {
          const id = extractId(person.url);
          return <PeopleCard key={id} id={id} name={person.name} />;
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={goPrev} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={goNext} disabled={!data.next}>
          Next
        </button>
      </div>

      {modalId && <PeopleModal id={modalId} />}
    </div>
  );
}