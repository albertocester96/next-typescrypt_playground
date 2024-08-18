'use client'

import { createMatch } from '@/actions/actions';
import { Button } from '@radix-ui/themes';
import React, { useState } from 'react'

const NewMatch = () => {

    const numberOfPlayers: number[] = [8,10,12,14]

    const [numPlayers, setNumPlayers ] = useState(0)

  return (
    <form id="numPlayers" className='w-full flex flex-col justify-center' action={createMatch}>
            <h1 className='text-center mb-2'> Giocatori </h1>
            <div className='flex flex-row space-x-2 justify-center'>
                {numberOfPlayers.map((item, index) =>
                
                <Button radius="full"
                    key={index} 
                    onClick={() => setNumPlayers(item)}>
                        {item}
                </Button>
                )
                }
            <input type="hidden" name='numberOfPlayers' value={numPlayers} />
            </div>
    </form>
  )
}

export default NewMatch
