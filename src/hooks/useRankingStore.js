import { useDispatch, useSelector } from "react-redux"
import { setPractice1, setQ1, setQ2, setQ3, setSptrint } from "../store/rankings/rankingSlice";
import f1Api from "../api/f1Api";

export const useRankingsStore = () => {
    const dispatch = useDispatch();
    const {practice1, Q1, Q2, Q3, sprint} = useSelector( state => state.rankings);

    const setStartPractice1 = async(id) => {
        const {data} = await f1Api.get(`rankings/races?race=${id}`);
        dispatch( setPractice1(data.response));
    };

    const setStartQ1 = async(id) => {
        //TODO Hacer La llamada a la api
        const { data } = await f1Api.get(`rankings/races?race=${id}`);
        dispatch( setQ1(data.response) );
    };

    const setStartQ2 = async(id) => {
        //TODO Hacer La llamada a la api
        const { data } = await f1Api.get(`rankings/races?race=${id}`);
        dispatch( setQ2(data.response) );
    };

    const setStartQ3 = async(id) => {
        //TODO Hacer La llamada a la api
        const { data } = await f1Api.get(`rankings/races?race=${id}`);
        dispatch( setQ3(data.response) );
    };

    const setStartSrint = async(id) => {
        const { data } = await f1Api.get(`rankings/races?race=${id}`);
        console.log(data)
        dispatch( setSptrint(data.response) )
    };

    //TODO Hacer LOS RESTANTES SET

    return {
        //*Propiedades
        practice1,
        Q1,
        Q2,
        Q3,
        sprint,

        //*Metodos
        setStartPractice1,
        setStartQ1,
        setStartQ2,
        setStartQ3,
        setStartSrint,
    };;
} 