import { dataActions } from './dataSlice';
import { notificationActions } from './notificationSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const fetchData = () => {

    return async (dispatch) => {

        dispatch(notificationActions.updateNotification({open : true ,message : "Sending API request",
    type:"info"}));

        const fetchHandle = async () => {
            const res = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
            if(res) 
            { dispatch(notificationActions.updateNotification({open : true ,message : "API request successfull",
            type:"success"}));
            }
            else{
                dispatch(notificationActions.updateNotification({open : true ,message : "Server not responding",
                type:"error"}));
            }
            return res.data.data;
        }

        try {
            const data = await fetchHandle();
            dispatch(dataActions.updateData({ data }));
            dispatch(notificationActions.updateNotification({open : false}));
           
        }
        catch (err) {
            console.log(err);
            dispatch(notificationActions.updateNotification({open : true ,message : "Server is not responding",
            type:"error"}));
            
        }
    }
}

export const addData = (data) => {

    return async (dispatch) => {

        console.log("in add ");
        console.log(data);
        dispatch(notificationActions.updateNotification({open : true ,message : "Sending post API request",
        type:"info"}));

        try{
            const res = await axios.post('http://dummy.restapiexample.com/api/v1/create',
            {name:data.name,salary:data.salary,age:data.age});
            console.log(res);
            if(res.statusCode === 200)
            {
                dispatch(notificationActions.updateNotification({open : true ,message : "Record added successfully",
                type:"success"}));

                dispatch(fetchData());
            }
            else
            {
                dispatch(notificationActions.updateNotification({open : true ,message : "Server not responding",
                type:"error"}));
            }
        }
        catch(err)
        {
            dispatch(notificationActions.updateNotification({open : true ,message : "Server not responding",
            type:"error"}));
            console.log(err);
        }


    }
}

export const deleteData = (id) => {

    return async (dispatch) => {

        dispatch(notificationActions.updateNotification({open : true ,message : "Sending delete API request",
        type:"info"}));

        try {
            const res = await axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
           
            if(res.data.status==="success")
            { 
                dispatch(notificationActions.updateNotification({open : true ,message : "Record deleted successfully",
                type:"success"}));  

                dispatch(fetchData());
            }
            else
            {
                dispatch(notificationActions.updateNotification({open : true ,message : "Server not responding",
                type:"error"}));
            }

        }
        catch (err) {
            dispatch(notificationActions.updateNotification({open : true ,message : "Server not responding",
            type:"error"}));
            console.log(err);
        }
    }
}