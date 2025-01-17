import { useEffect } from "react";
import { PositionItem } from "../../race/components/PositionItem"
import { useRacesStore } from "../../hooks/useRacesStore";
import { useRankingsStore } from "../../hooks/useRankingStore";


export const TableRace = ({id}) => {

    const {race: fecha, races} = useRacesStore();
    const {race, setStartRace } = useRankingsStore();

    const cargarRace = () => {
        const carrera = races.find(elem => (elem.type === 'Race') && (elem.competition.id === fecha.competition.id));
        setStartRace(carrera.id);
    };

    useEffect(() => {
        cargarRace();
    }, [])

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
                    {race.map((elem) => (
                        <PositionItem key={elem.driver.id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
