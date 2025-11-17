export interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
  url: string;
  films: string[];
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}