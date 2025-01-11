import { useEffect} from 'react'
import { useSeasonStore } from '../hooks'
import { SeasonItem } from '../season/components/SeasonItem';

export const AsideBar = () => {

  const {active, isLoading, seasons, startGetSeasons} = useSeasonStore();

  useEffect(() => {
    startGetSeasons()
  }, [])

  return (
    <aside className='w-64 w h-screen bg-gray-800 text-white top-0 left-0 overflow-y-auto p-4'>
        {
          isLoading
          ?
            <div className='flex-grow flex justify-center items-center h-full'>
              <div className='w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin'></div>
            </div>
          : <>
              <h2 className='text-2xl font-bold mb-4'>F1 Temporadas</h2>
              <ul className='space-y-2'>
                {seasons.map((season) => (
                  <SeasonItem season={season} key={season} />
                ))}
                </ ul>
            </>
        }
    </aside>
  )
}
