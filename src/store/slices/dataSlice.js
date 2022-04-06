import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: "apiData",
    initialState: { dataArr: [] },
    reducers: {
        updateData(state, action) {
            console.log(action.payload.data);
            state.dataArr = action.payload.data;
        },
    }
});

export const dataActions = dataSlice.actions;

export default dataSlice;



