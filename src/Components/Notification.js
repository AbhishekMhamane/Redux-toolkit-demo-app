import React from 'react'
import Alert from '@mui/material/Alert';
import {useSelector} from 'react-redux';

const Notification = () => {

  const noti = useSelector((state) => state.notification.notification);

  return (
    <div>
        <Alert severity={noti.type} style={{width: '100%'}}>{noti.message}</Alert>
        
    </div>
  )
}

export default Notification