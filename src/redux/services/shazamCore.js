import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f3c574cbc5msh6ef71b73037681ap189404jsn9e70277c88f4');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `/charts/world` }),
    getSongDetails: builder.query({ query: (songId) => `/tracks/details?track_id=${songId}` }),
    getSongRelated: builder.query({ query: (songId) => `/tracks/related?track_id=${songId}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } = shazamCoreApi;
