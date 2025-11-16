import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const peopleApi = createApi({
    reducerPath: "peopleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.dev/api/",
    }),
    endpoints: (builder) => ({
        getPeople: builder.query<any, number>({
            query: (page=1) => `people/?page=${page}`,
        }),

        getPersonById: builder.query<any, string>({
            query: (id: string) => `people/${id}`,
        }),
    }),
});

export const { useGetPeopleQuery, useGetPersonByIdQuery } = peopleApi;
