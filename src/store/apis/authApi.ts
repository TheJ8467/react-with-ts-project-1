import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It has endpoints of login, logout, register, getUserInfo, updateProfile, resetPassword, refreshToken, checkstatus
const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://plw28h-3005.csb.app/',
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
        // transformResponse: () => ({
        //   accessToken: 'mockAccessToken',
        //   expirationTime: 'mockExpirationTime',
        // }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/logout',
          method: 'POST',
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
      getCurrentUserInfo: builder.query({
        query: () => ({
          url: '/login',
          method: 'GET',
        }),
      }),
      updateProfile: builder.mutation({
        query: (updatedInfo) => ({
          url: '/register',
          method: 'PUT',
          body: updatedInfo,
        }),
      }),
      resetPassword: builder.mutation({
        query: (email) => ({
          url: '/reset-password',
          method: 'POST',
          body: { email },
        }),
      }),
      refreshToken: builder.mutation({
        query: () => ({
          url: '/refresh-token',
          method: 'POST',
        }),
      }),
      checkAuthStatus: builder.query({
        query: () => ({
          url: '/status',
          method: 'GET',
        }),
      }),
      updateAuthStatus: builder.mutation({
        query: (status) => ({
          url: '/status',
          method: 'POST',
          body: status,
        }),
      }),
    };
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useGetCurrentUserInfoQuery,
  useUpdateProfileMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useCheckAuthStatusQuery,
  useUpdateAuthStatusMutation,
} = authApi;
export { authApi };
