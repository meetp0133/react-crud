import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
    name: 'userData',
    initialState: {
        userData: [], // this should be directly modified
    },
    reducers: {
        responseUserData: (state, action) => {
            console.log('action payload:', action?.payload);
            state.userData = action.payload; // directly modify the property
        },
    },
});

export default userData.reducer;
export const { responseUserData } = userData.actions;
