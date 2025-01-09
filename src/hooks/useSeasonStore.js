import { useDispatch, useSelector } from "react-redux"
import f1Api from "../api/f1Api";
import { getSeason, loading, setActive } from "../store/season/seasonSlice";

export const useSeasonStore = () => {

    const dispatch = useDispatch();
    const {active, isLoading, seasons} = useSelector( state => state.seasons);

    const startGetSeasons = async() => {
        dispatch(loading());

        const { data } = await f1Api.get('seasons');

        dispatch(getSeason(data.response))
    };

    const startSetActive = async(id) => {
        dispatch(setActive( id ))
    }

    return {
        //*Propiedades
        active,
        isLoading,
        seasons,

        //*Metodos
        startGetSeasons,
        startSetActive
    }

}