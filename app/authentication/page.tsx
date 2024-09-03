'use client'

import React, { useState } from 'react'
import Input from '@/components/input'


const Auth = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

 
  return (
    <div className='relative h-full w-full bg-zinc-200'>
      <div className='w-full h-full lg:bg-opacity-50'>
        <div className='px-12 py-5'>
          <div className='flex justify-center'>
            <div className='px-16 py-16 self-center'>
              <h2 className='text-4xl mb-8 font-semibold'> Registrati </h2>
              <Input
                label='Nome'
                id="name"
                value={name}
                onChange={(e: any) => {setName(e.target.value)}}
                type="name" />
              
              <Input
              label='Email'
              id="email"
              value={email}
              onChange={(e: any) => {setEmail(e.target.value)}}
              type="email" />
              <Input
                label='Password'
                id="password"
                value={password}
                onChange={(e: any) => {setPassword(e.target.value)}}
                type="password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
