import { createSlice } from "@reduxjs/toolkit";
import {STATUSES} from './statuses'

import axios from 'axios'


const SingleAnimalSlice = createSlice({
    name: 'SingleAnimal',
    initialState : {
        data: null,
        status: STATUSES.LOADING
    },
    reducers: {
        setSingleAnimal(state,action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setSingleAnimal, setStatus} = SingleAnimalSlice.actions

export default SingleAnimalSlice.reducer




//fetching Single animal
export const fetchSingleAnimal = (id) => async (dispatch) => {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const response = await axios.get(`http://localhost:3000/animals/${id}`);
      console.log("This is response of singleAnimal", response.data.data);
      
      dispatch(setSingleAnimal(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.error("Error fetching single animal:", error);
      dispatch(setStatus(STATUSES.ERROR)); 
    }
  };
  