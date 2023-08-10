import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

// it is for simplified useAddAddressMutation
const addAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post(`${baseUrl}/addresses`, {
    address: 'some address',
  });

  return response.data;
});

export { addAddress };
