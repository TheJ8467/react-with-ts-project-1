import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It has endpoints of login, logout, register, getUserInfo, updateProfile, resetPassword, refreshToken, checkstatus
const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  tagTypes: ['Auth', 'UsersAuth'],
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
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
          body: newUserInfo,
        }),
      }),
      getUserInfo: builder.query({
        query: () => ({
          url: '/user',
          method: 'GET',
        }),
      }),
      updateProfile: builder.mutation({
        query: (updatedInfo) => ({
          url: '/user',
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
    };
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useCheckAuthStatusQuery,
} = authApi;
export { authApi };