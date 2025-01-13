
import { PositionItem } from "./PositionItem"
import { useRacesStore } from "../../hooks/useRacesStore";
import { useEffect } from "react";
import { useRankingsStore } from "../../hooks/useRankingStore";



export const TableQ3 = ({id}) => {

    const {race, races} = useRacesStore();
    const { Q3, setStartQ3 } = useRankingsStore();

    const cargarQ3 = () => {
        const carrera = races.find(elem => (elem.type === "3rd Qualifying") && (elem.competition.id === race.competition.id));
        setStartQ3(carrera.id);
    };

    useEffect(() => {
        cargarQ3()
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
                    {Q3.map((elem) => (
                        <PositionItem key={elem.driver.id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
