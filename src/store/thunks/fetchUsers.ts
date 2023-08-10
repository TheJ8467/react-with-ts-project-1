import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export { fetchUsers };
