import { createSlice } from '@reduxjs/toolkit';
import { STATUSES } from './statuses';
import { API } from '../../src/http/index';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {}, 
    status: STATUSES.LOADING, 
    token: null, 
    
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    restoreAuthState(state, action) {
      const { token, user } = action.payload;
      state.token = token;
      state.data = user;
    },
  },
});

export const { setUser, setStatus, setToken, restoreAuthState } = authSlice.actions;
export default authSlice.reducer;



// Thunk for user registration
export function registerUser(formData) {
  return async function registerUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post('/auth/register', formData);
      console.log('Registration response:', response?.data?.user);

      dispatch(setUser(response?.data?.user));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// Thunk for user login
export function loginUser(credentials) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post('/auth/login', credentials);
      const token = response?.data?.token;
      const user = response?.data?.user;

      dispatch(setToken(token));
      dispatch(setUser(user));
      dispatch(setStatus(STATUSES.SUCCESS));

      // Save token to localStorage
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login Error:', error?.response?.data || error.message);
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(setErrorMessage(error.response?.data?.message || 'Login failed.'));
    }
  };
}

