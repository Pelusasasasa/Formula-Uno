import { useDispatch, useSelector } from "react-redux";
import { loading, setActive } from "../store/races/racesSlice";
import f1Api from "../api/f1Api";

export const useRacesStore = () => {

    const dispatch = useDispatch();
    const {isLoading, race, races} = useSelector(state => state.races);

    const startSetRace = async(id) => {
        dispatch( loading() );
        const { data } = await f1Api.get(`races?id=${id}`);        

        dispatch( setActive(data.response[0]) );
    }

    return {
        //*Propiedades
        isLoading,
        race,
        races,

        //*Metodos
        startSetRace
    }
};