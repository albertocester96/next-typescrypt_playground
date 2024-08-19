
import { createMatch } from '@/actions/actions';
import NumPlayersSelector from '@/components/NumPlayersSelector';
import { Button } from '@radix-ui/themes';


const NewMatch = () => {

  return (
    <form id="numPlayers" className='w-full flex flex-col justify-center' action={createMatch}>
            <h1 className='text-center mb-2'> Giocatori </h1>
            

            <div className='flex justify-center'>
                <NumPlayersSelector />
                <Button type='submit'>
                    Crea partita
                </Button>
            </div>
    </form>
  )
}

export default NewMatch
