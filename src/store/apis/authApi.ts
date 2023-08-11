import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../baseUrl';

// It has endpoints about user authentication.

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['User'],
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation({
        query: (newUserInfo) => ({
          url: '/register',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUserInfo),
        }),
        invalidatesTags: [{ type: 'User', id: 'LIST' }],
      }),
      getUserInfo: builder.query({
        query: () => ({
          url: '/register',
          method: 'GET',
        }),
        providesTags: [{ type: 'User', id: 'LIST' }],
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation, useGetUserInfoQuery } =
  authApi;
export { authApi };
