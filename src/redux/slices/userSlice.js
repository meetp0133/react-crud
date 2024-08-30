import { createSlice, nanoid } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userListData: []
    },
    reducers: {
        addUser: (state, action) => {
           return {...state,  userListData: action.payload }
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer