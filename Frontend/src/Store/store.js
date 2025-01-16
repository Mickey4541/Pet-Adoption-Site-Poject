import {configureStore} from '@reduxjs/toolkit'
import AdoptionAvailableOrNotSlice from './AdoptionAvailableOrNotSlice'



export const store = configureStore({
    reducer: {
        AdoptionAvailableOrNot : AdoptionAvailableOrNotSlice
    }
})

export default store