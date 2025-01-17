import { createSlice } from "@reduxjs/toolkit";
import {STATUSES} from './statuses'

import axios from 'axios'


const AllAnimalsSlice = createSlice({
    name: 'AllAnimals',
    initialState : {
        data: [],
        status: STATUSES.LOADING
    },
    reducers: {
        setAllAnimals(state,action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const {setAllAnimals, setStatus} = AllAnimalsSlice.actions

export default AllAnimalsSlice.reducer




export function fetchAnimals() {
    return async function fetchAnimalsThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING)); // Set loading status
        try {
            const response = await axios.get('http://localhost:3000/animals');
            console.log(response.data, "This is response");
            dispatch(setAllAnimals(response.data.data)); // Pass only the data array
            dispatch(setStatus(STATUSES.SUCCESS)); // Set success status
        } catch (error) {
            console.error("Error fetching animals:", error);
            dispatch(setStatus(STATUSES.ERROR)); // Set error status
        }
    };
}
