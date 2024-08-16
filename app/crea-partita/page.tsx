import React from 'react'

const NewMatch = () => {

    const matchData = [ 
        "Giocatori",
        "Calendario",
        "Location",
        "Giocatori/Gruppi"
    ]

  return (
    <div>
        <section className='w-full flex justify-center pt-10 pb-3'>
            <div className='bg-slate-200 rounded-md flex flex-col p-4 md:flex-row w-2/4 max-w-screen-md justify-center'>
                <div className='min-w-40 min-h-40 bg-yellow-400'>
                    <h1 className='flex justify-center items-center h-full'> Cerchio </h1>
                </div>
                <div className='bg-yellow-200 flex grow h-full'>
                    <div className='bg-red-400 p-2 w-full place-content-center pl-5'>
                        <h1 className='font-bold text-lg'> Crea partita </h1>
                        <p> Componenti </p>
                    </div>
                </div>
            </div>

        </section>

        <section className='w-full flex justify-center py-20'> 
                <div className='bg-slate-200 rounded-md flex flex-col p-6 md:flex-row w-2/4 max-w-screen-md justify-center'>
                <div className='w-full space-y-2'>
                    {matchData.map((item: String) => 
                        <div className='flex flex-row justify-between py-5 px-4 rounded-md border-2 border-black '>
                            <h1> {item} </h1>
                            <p> Cerca </p>
                        </div>
                    )}
                     
                </div>
                    
                </div>
        </section>

    </div>
  )
}

export default NewMatch
