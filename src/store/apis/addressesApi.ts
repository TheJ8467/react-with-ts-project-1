import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//It has endpoints of remove address, add address, fetch address
const addressesApi = createApi({
  reducerPath: 'addresses',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://plw28h-3005.csb.app/',
  }),
  tagTypes: ['Address', 'UsersAddresses'],
  endpoints(builder) {
    return {
      removeAddress: builder.mutation({
        invalidatesTags: (result, error, address) => {
          return [{ type: 'Address', id: address.id }];
        },
        query: (address) => {
          return {
            url: `/addresses/${address.id}`,
            method: 'DELETE',
          };
        },
      }),
      addAddress: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'UsersAddresses', id: user.id }];
        },
        query: (user) => {
          return {
            url: '/addresses',
            method: 'POST',
            body: {
              userId: user.id,
              title: 'some title',
            },
          };
        },
      }),
      fetchAddresses: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((address: { id: number }) => {
            return { type: 'Address', id: address.id };
          });
          tags.push({ type: 'UsersAddresses', id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: '/addresses',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchAddressesQuery,
  useAddAddressMutation,
  useRemoveAddressMutation,
} = addressesApi;
export { addressesApi };
