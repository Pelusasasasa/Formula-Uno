import { useEffect, useState } from "react";
import f1Api from "../../api/f1Api";
import { PositionAnualItem } from "../components/PositionAnualtem";

export const TableAnual = ({season}) => {
    const [rankingAnual, setRankingAnual] = useState([]);

    const traerRanking = async() => {
        const { data } = await f1Api.get(`rankings/drivers?season=${season}`);
        setRankingAnual(data.response);
        console.log(data.response)
    };

    useEffect(() => {
        traerRanking();
    }, []);
    
    return (
        <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2 text-pretty">Posicion</th>
                        <th className="border px-4 py-2 text-pretty">Corredor</th>
                        <th className="border px-4 py-2 text-pretty">Equipo</th>
                        <th className="border px-4 py-2 text-pretty">Puntos</th>
                        <th className="border px-4 py-2 text-pretty">Ganadas</th>
                    </tr>
                </thead>
                <tbody>
                    {rankingAnual.map((elem) => (
                        <PositionAnualItem {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
