import React from 'react'

interface InputProps{
    id: string,
    onChange: any,
    value: string,
    label: string,
    type?: string
}


const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {


  return (
    <div className=''>
        <label 
            htmlFor={id}> {label} </label>
        <input 
            id={id}
            onChange={onChange}
            value={value}
            type={type} />
    </div>
  )
}

export default Input
