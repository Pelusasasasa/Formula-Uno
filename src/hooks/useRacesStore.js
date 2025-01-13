import { useDispatch, useSelector } from "react-redux";
import { loading, setActive, setRaces } from "../store/races/racesSlice";
import f1Api from "../api/f1Api";

export const useRacesStore = () => {

    const dispatch = useDispatch();
    const {isLoading, race, races} = useSelector(state => state.races);

    const startSetRace = async(id) => {
        if (id !== "") {
            dispatch( loading() );
            console.log(id)
            const { data } = await f1Api.get(`races?id=${id}`);

            dispatch( setActive(data.response[0]) );
        };
    };

    const startSetRaces = async(lista) => {
        dispatch( setRaces(lista));
    };

    return {
        //*Propiedades
        isLoading,
        race,
        races,

        //*Metodos
        startSetRace,
        startSetRaces
    }
};