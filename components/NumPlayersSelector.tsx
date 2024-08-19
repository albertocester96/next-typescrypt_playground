"use client"

import { SegmentedControl } from '@radix-ui/themes'
import React, { useState } from 'react'
   
const NumPlayersSelector = () => {

    const numberOfPlayers: number[] = [8,10,12,14]

    const [selectedPlayers, setSelectedPlayers] = useState(numberOfPlayers[1].toString())
  return (
    <div className='flex flex-row space-x-2 justify-center mb-5'>
                <SegmentedControl.Root key={numberOfPlayers[1]}
                    defaultValue="10" 
                    onValueChange={(value) => setSelectedPlayers(value)}>
                {numberOfPlayers.map((item) =>
                
                    <SegmentedControl.Item key={item} 
                    value={item.toString()}> 
                        {item} 
                    </SegmentedControl.Item>
                )
                }
                </SegmentedControl.Root>
            <input type="hidden" name='numberOfPlayers' value={selectedPlayers} />
            </div>
  )
}

export default NumPlayersSelector


