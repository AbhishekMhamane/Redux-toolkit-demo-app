import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import {addData} from '../store/slices/dataActions';
import {useDispatch} from 'react-redux';

const AddComponent = () => {

  const dispatch = useDispatch();

  const { register,control,handleSubmit } = useForm();
  const onSubmit = (data) => {
   // console.log(data)
    dispatch(addData(data));
  };


  return (
    <div style={{marginTop:'15px',marginBottom:'10px'}}>
      <form >
      <Grid container>
        <Grid item xs={3} >
          <TextField 
            {...register("name")}
            control={control}
            size="small"
            helperText="Please enter emplyee name"
            id="demo-helper-text-misaligned"
            label="Name"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField 
            {...register("salary")}
            control={control}
            size="small"
            helperText="Please enter emplyee salary"
            id="demo-helper-text-misaligned"
            label="Salary"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField 
            {...register("age")}
            control={control}
            size="small"
            helperText="Please enter emplyee age"
            id="demo-helper-text-misaligned"
            label="Age"
          />
        </Grid>
        <Grid item xs={3} >
        <Button  onClick={handleSubmit(onSubmit)} variant="contained" size="medium" 
        style={{
          width:'50%',
          backgroundColor:'#00BFFF',
          fontWeight:'bold',
          fontSize:'16px',  
        }}>
          ADD</Button> 
        </Grid>
      </Grid>
      </form>
    </div>
  )
}

export default AddComponent;