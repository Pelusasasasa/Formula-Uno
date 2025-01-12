import { useDispatch, useSelector } from "react-redux"
import f1Api from "../api/f1Api";
import { getSeason, loading, setActive } from "../store/season/seasonSlice";

const dates = [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024];

export const useSeasonStore = (data) => {

    const dispatch = useDispatch();
    const {active, isLoading, seasons} = useSelector( state => state.seasons);

    const startGetSeasons = async() => {
        dispatch(loading());

        // const { data } = await f1Api.get('seasons');

        // dispatch(getSeason(data.response));
        dispatch(getSeason(dates));
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