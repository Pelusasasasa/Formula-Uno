import { useEffect} from 'react'
import { useSeasonStore } from '../hooks'

export const AsideBar = () => {

  const {active, isLoading, seasons, startGetSeasons} = useSeasonStore();

  useEffect(() => {
    startGetSeasons()
  }, [])

  return (
    <aside className='w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 overflow-y-auto p-4'>
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
                  <li key={season}
                  className='hover:bg-gray-700 px-3 py-2 rounded cursor-pointer'>
                    {season}
                  </li>
                ))}
                </ ul>
            </>
        }
    </aside>
  )
}
