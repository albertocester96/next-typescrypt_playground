"use client"

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/it';
import React from 'react'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';


dayjs.extend(utc);
dayjs.extend(timezone);

const DateTimeSelector = () => {

    const [value, setValue] = React.useState<Dayjs | null>(null);
    
  return (
    <div className='flex justify-center'>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="it">
       <DateTimePicker value={value} timezone="Europe/Rome" disablePast name='dateTime' onChange={(newValue) => setValue(newValue)} />
       </LocalizationProvider>
    </div>
  )
}

export default DateTimeSelector
