import { useDispatch, useSelector } from "react-redux"
import { setDriver, setLoading, setStats } from "../store/driver/driverSlice";
import f1Api from "../api/f1Api";

export const useDriverStore = () => {
    const dispatch = useDispatch();
    const {isLoadingDriver, driver, driverStats} = useSelector(state => state.driver);


    const setIsLoading = () => {
        dispatch( setLoading() );
    };

    const setStartDriver = async(id, season = 2024) => {
        const { data } = await f1Api.get(`drivers?id=${id}`);
        dispatch(setDriver(data.response[0]));
    };

    const setStartStatsDriver = async(id, season = 2024) => {
        const { data } = await f1Api.get(`rankings/drivers?season=${season}&driver=${id}`);

        dispatch(setStats(data.response[0]));
    };


    return {
        //*Propiedades
        driver,
        driverStats,
        isLoadingDriver,

        //*Metodos
        setIsLoading,
        setStartDriver,
        setStartStatsDriver

    }
}