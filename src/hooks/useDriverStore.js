import { useDispatch, useSelector } from "react-redux"
import { setDriver, setLoading, setStats } from "../store/driver/driverSlice";
import f1Api from "../api/f1Api";

export const useDriverStore = () => {
    const dispatch = useDispatch();
    const {isLoadingDriver, driver, driverStats} = useSelector(state => state.driver);


    const setIsLoading = () => {
        dispatch(setLoading())
    };

    const setStartDriver = async(id, season) => {
        const { data } = await f1Api.get(`drivers?id=${id}`);

        dispatch(setDriver(data.response));
    };

    const setStartStatsDriver = async(id, season) => {
        const { data } = await f1Api.get(`rankings/drivers?season=${season}&driver=${id}`);

        dispatch(setStats(data.responses));
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