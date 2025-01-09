
import { useSeasonStore } from '../../hooks';

export const SeasonItem = ({season}) => {

    const { active, startSetActive } = useSeasonStore();

    const setActive = (e) => {
        let id = e.target.id;

        startSetActive( id  )
    };

    console.log(active)
    console.log(season)

  return (
    <li id={season} className={`${active == season ? 'bg-gray-500' : 'hover:bg-gray-700'} px-3 py-2 rounded cursor-pointer `} onClick={setActive}> 
        {season}
    </li>
  )
};
