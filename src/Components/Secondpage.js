import React from 'react'
import {useSelector} from 'react-redux';
import TableComponent from './Table';

const Secondpage = () => {
    const data = useSelector((state) => state.apiData.dataArr);
    console.log("in second");
    console.log(data)
  return (
    <div>
        <h2>Message : Please refresh the page to check redux state is persist or not</h2>
        <TableComponent data={data}/>
    </div>
  )
}

export default Secondpage