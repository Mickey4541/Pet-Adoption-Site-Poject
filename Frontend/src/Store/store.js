import {configureStore} from '@reduxjs/toolkit'
import AllAnimalsSlice from './AllAnimalsSlice'
import SingleAnimalSlice from './SingleAnimalSlice'

export const store = configureStore({
    reducer: {
        AllAnimals : AllAnimalsSlice,
        SingleAnimal : SingleAnimalSlice,
    }
})

export default store