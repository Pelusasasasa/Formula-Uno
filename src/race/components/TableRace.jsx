import { useEffect, useState } from "react";
import { PositionItem } from "../../race/components/PositionItem"
import f1Api from "../../api/f1Api";

export const TableRace = ({id}) => {

    const [rankingRace, setRankingRace] = useState([]);

    const traerRanking = async() => {
        const { data } = await f1Api.get(`rankings/races?race=${id}`);    
        setRankingRace(data.response);
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
                        <th className="border px-4 py-2 text-pretty">Pits</th>
                        <th className="border px-4 py-2 text-pretty">Tiempo</th>
                    </tr>
                </thead>
                <tbody>
                    {rankingRace.map((elem) => (
                        <PositionItem key={elem.id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
