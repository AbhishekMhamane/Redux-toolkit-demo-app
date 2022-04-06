import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, deleteData } from '../store/slices/dataActions';
import { dataActions } from '../store/slices/dataSlice';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Header from './Header';
import TableComponent from './Table';
import AddComponent from './AddComponent';
import Notification from './Notification';


const Mainpage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());

    }, [dispatch]);

    const data = useSelector((state) => state.apiData.dataArr);
    const notification = useSelector((state) => state.notification.notification);
   // console.log(notification)
    // const data = [

    //     {
    //     "id": 1,
    //     "employee_name": "Tiger Nixon",
    //     "employee_salary": 320800,
    //     "employee_age": 61,
    //     "profile_image": ""
    //     },
    //     {
    //     "id": 2,
    //     "employee_name": "Garrett Winters",
    //     "employee_salary": 170750,
    //     "employee_age": 63,
    //     "profile_image": ""
    //     },
    //     {
    //     "id": 3,
    //     "employee_name": "Ashton Cox",
    //     "employee_salary": 86000,
    //     "employee_age": 66,
    //     "profile_image": ""
    //     },
    //     {
    //     "id": 4,
    //     "employee_name": "Cedric Kelly",
    //     "employee_salary": 433060,
    //     "employee_age": 22,
    //     "profile_image": ""
    //     },
    //     {
    //     "id": 5,
    //     "employee_name": "Airi Satou",
    //     "employee_salary": 162700,
    //     "employee_age": 33,
    //     "profile_image": ""
    //     }];

    

    return (
        <div>
            <Grid container >
                <Grid item xs={12}>
                <Header/>
                {notification.open && <Notification/>}
                </Grid>
                <Grid item xs={12}>
                    <Link to='/secondpage' ><h2>test the redux state is persist or not using redux-persist</h2></Link>
                <AddComponent />
                </Grid>
                <Grid item xs={12}>
                <TableComponent data={data}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Mainpage