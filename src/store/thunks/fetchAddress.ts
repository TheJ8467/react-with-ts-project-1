import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('https://lxsxq5-3005.csb.app/addresses');

  return response.data;
});

export { fetchAddress };
