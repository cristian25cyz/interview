import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  name: string;
}

function PeopleCardComponent({ id, name }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="person-card"
      onClick={() => navigate(`/people/${id}`)}
    >
      <img
        src={`https://picsum.photos/200?random=${id}`}
        alt={name}
      />
      <h3>{name}</h3>
    </div>
  );
}

export const PeopleCard = React.memo(PeopleCardComponent);