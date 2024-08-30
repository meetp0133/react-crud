// import { configureStore } from '@reduxjs/toolkit';
// import user from "./slices/user"
// import userData from './slices/userData'

// const store = configureStore({ reducer: userData })

import { configureStore } from '@reduxjs/toolkit'
import userData from './slices/userData'

const store = configureStore({
    reducer: userData,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
export default store