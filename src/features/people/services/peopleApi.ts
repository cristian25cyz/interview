import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PeopleResponse, Person } from "../types";

export const peopleApi = createApi({
    reducerPath: "peopleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.dev/api/",
    }),
    endpoints: (builder) => ({
        getPeople: builder.query<PeopleResponse, number>({
            query: (page=1) => `people/?page=${page}`,
        }),

        getPersonById: builder.query<Person, string>({
            query: (id: string) => `people/${id}`,
        }),
    }),
});

export const { useGetPeopleQuery, useGetPersonByIdQuery } = peopleApi;
