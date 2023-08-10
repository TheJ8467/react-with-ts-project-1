import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const fetchAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post(`${baseUrl}/addresses`);

  return response.data;
});

export { fetchAddress };
