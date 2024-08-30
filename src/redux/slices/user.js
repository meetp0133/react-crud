import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (state, action) => {
            console.log('action', action)
            return { ...state, user: action.payload }
        }
    }
})

export const { addUser } = user.actions
export default user.reducer