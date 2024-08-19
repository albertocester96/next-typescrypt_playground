"use client"

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React from 'react'

const DateTimeSelector = () => {

    const [value, setValue] = React.useState<Dayjs | null>(null);
    
  return (
    <div className='flex justify-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DateTimePicker value={value} name='dateTime' onChange={(newValue) => setValue(newValue)} />
       </LocalizationProvider>
    </div>
  )
}

export default DateTimeSelector
