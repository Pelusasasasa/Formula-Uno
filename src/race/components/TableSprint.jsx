
import { PositionItem } from "./PositionItem"
import { useRacesStore } from "../../hooks/useRacesStore";
import { useEffect } from "react";
import { useRankingsStore } from "../../hooks/useRankingStore";



export const TableSprint = ({id}) => {

    const {race, races} = useRacesStore();
    const { sprint, setStartSrint } = useRankingsStore();

    const cargarSprint = () => {
        const carrera = races.find(elem => (elem.type === "Sprint") && (elem.competition.id === race.competition.id));
        setStartSrint(carrera.id);
    };

    useEffect(() => {
        cargarSprint()
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
                    {sprint.map((elem) => (
                        <PositionItem key={elem.driver.id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
