import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: "notification",
    initialState: { notification: {open:false , message:"",type:""} },
    reducers: {
        updateNotification(state, action) {
            state.notification = {
                open : action.payload.open,
                message : action.payload.message,
                type : action.payload.type
            }
            console.log(state.notification);
        },
    }
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
