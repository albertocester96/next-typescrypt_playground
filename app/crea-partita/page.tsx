
import { createMatch } from '@/actions/actions';
import DateTimeSelector from '@/components/DateTimeSelector';
import LocationSelector from '@/components/LocationSelector';
import NumPlayersSelector from '@/components/NumPlayersSelector';
import { Button } from '@radix-ui/themes';


const NewMatch = () => {

  return (
    <form id="numPlayers" className='w-full flex flex-col justify-center' action={createMatch}>

            <div className='flex flex-col justify-center space-y-6'>
            <h1 className='text-center mb-2'> Giocatori </h1>
                <NumPlayersSelector />

            <h1 className='text-center mb-2'> Data e ora </h1>
                <DateTimeSelector />

            <h1 className='text-center mb-2'> Campo </h1>
                <LocationSelector />

                <Button>
                    Crea partita
                </Button>
            </div>
    </form>
  )
}

export default NewMatch
