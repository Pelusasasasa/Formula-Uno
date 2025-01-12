import { useEffect, useState } from "react";
import { useRacesStore, useSeasonStore } from "../../hooks";
import f1Api from "../../api/f1Api";
import { TableAnual } from "../../season/pages/TableAnual";
import { TableRace } from "../components/TableRace";

const initialStatedrive = {
    name: '',
    image: '',
}

export const Race = () => {
    const {race, startSetRace} = useRacesStore();
    const {active} = useSeasonStore();
    
    const {circuit, competition, date, fastest_lap, laps, status, id} = race;

    const [driver, setDriver] = useState(initialStatedrive);
    const [activeTable, setActiveTable] = useState('race');

    const traerConductor = async() => {
        const { data } = await f1Api.get(`drivers?id=${fastest_lap?.driver.id}`)
        setDriver(data.response[0]);
    };

  return (
    race.id ?
    <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Titulo y Fecha */}
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{competition.name}</h2>
            <p className="text-gray-500">{competition.location.city} - {competition.location.country}</p>
            <p className="text-gray-600 mt-2">{new Date(date).toLocaleDateString()}</p>
        </div>

        {/* Botones de Alternancia */}
        <div className="flex justify-center space-x-4 mb-6">
            <button onClick={() => setActiveTable('race')} className={`px-4 py-2 rounded-lg font-bold ${activeTable === 'race' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Tabla de la carrera</button>
            <button onClick={() => setActiveTable('anual')} className={`px-4 py-2 rounded-lg font-bold ${activeTable === 'anual' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Tabla Anual</button>
        </div>
        {/* Si la tabla esta activa en race significa que son carreras y si es anual es la tabla anual */}

        {
            activeTable === 'race'
            ? <TableRace id={id}/>
            : <TableAnual season={active} />
        }
        

        <div className="flex justify-around">
            {/* Imagen Y nombre Del Circuito */}
        <div className="flex flex-col items-center mb-6">
            <img src={circuit.image} alt={circuit.name} className="w-64 h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-700">{circuit.name}</h3>
        </div>

        {/* Detalles de la carrera */}
        <div className="grid grid-cols-2 gap-4">
            {/* Completada */}
            <div className="flex flex-col items-center">
                <p className="text-gray-500">¿Completada?</p>
                <p className={`text-lg font-bold ${status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                    {status === 'Completed' ? 'Si' : 'No'}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-500">Vueltas</p>
                <p className="text-lg font-bold text-gray-800">{laps.total}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-500">Vuelta Mas Rapida</p>
                <div className="flex flex-col justify-center items-center">
                    <img src={driver?.image} alt={driver?.name} />
                    <p className="text-lg font-bold text-gray-800">{fastest_lap?.time} - {driver?.name}</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    :
    <></>
  )
}
