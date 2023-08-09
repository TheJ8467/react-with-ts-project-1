import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// it is for simplified useAddAddressMutation
const addAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('https://lxsxq5-3005.csb.app/addresses', {
    address: 'some address',
  });

  return response.data;
});

export { addAddress };
