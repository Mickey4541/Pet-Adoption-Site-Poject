import {configureStore} from '@reduxjs/toolkit'
import AllAnimalsSlice from './AllAnimalsSlice'
import SingleAnimalSlice from './SingleAnimalSlice'
import AuthSlice from './AuthSlice'



export const store = configureStore({
    reducer: {
        AllAnimals : AllAnimalsSlice,
        SingleAnimal : SingleAnimalSlice,
        auth: AuthSlice
    }
})

export default store