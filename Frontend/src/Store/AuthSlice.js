import { createSlice } from '@reduxjs/toolkit';
import { STATUSES } from './statuses';
import { API } from '../../src/http/index';



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {}, 
    status: STATUSES.LOADING, 
    token: null, 
    role: null, 
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;  
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setRole, setStatus, setToken } = authSlice.actions;
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
      console.log(response, "Login response");
      
      const token = response?.data?.token;
      console.log("The login token is", token); //correctly aayo
      
      const user = response?.data?.user;
      const role = response?.data?.user?.role;
      console.log("The role of user is", role) //admin role aayo aaha samma

      dispatch(setToken(token));
      dispatch(setUser(user));
      dispatch(setStatus(STATUSES.SUCCESS));
      dispatch(setRole(role));

      // Save token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', role)
    } catch (error) {
      console.error('Login Error:', error?.response?.data || error.message);
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(setErrorMessage(error.response?.data?.message || 'Login failed.'));
    }
  };
}

