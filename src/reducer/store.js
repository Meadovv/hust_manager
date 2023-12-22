import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './actions/userSlice'

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})