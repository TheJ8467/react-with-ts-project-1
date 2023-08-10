import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

// it is for simplified useAddUserMutation
const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post(`${baseUrl}/users`, {
    name: 'some name',
  });

  return response.data;
});

export { addUser };
