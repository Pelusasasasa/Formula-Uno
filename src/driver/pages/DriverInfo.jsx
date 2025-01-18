import { useEffect, useState } from "react";
import { useDriverStore } from "../../hooks/useDriverStore";
import { useSeasonStore } from "../../hooks/useSeasonStore";
import { calcularEdad } from "../../helpers/funciones";
import { useSearchParams } from "react-router-dom";

export const DriverInfo = () => {
    const [searchParams] = useSearchParams();

    const { active } = useSeasonStore();
    const { driver, driverStats, setStartDriver, setStartStatsDriver } = useDriverStore();
    console.log(driver)
    const {birthdate, image, name, nationality, number, teams} = driver || {};

    const driverId = searchParams.get('driver');
    console.log(driverId)
    

    const team = teams?.length > 0 ? teams[0].team : 'Sin Equipo';

    const cargarCondutor = () => {
      setStartDriver(driverId);
      setStartStatsDriver(driverId)
    };

    useEffect(() => {
      cargarCondutor();
    }, []);

  return (
    <div className='bg-white shadow-lg w-full rounded-lg p-4 flex flex-col items-center gap-4'>
        {/* Imagen del conductor */}
        <div className='flex-shrink-0'>
            <img src={image} alt={name} className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-300' />
        </div>

        {/* Informacion del conductor */}
        <div>
            <h2 className='text-xl font-bold text-gray-800'>{name} - {nationality}</h2>
            <p className='text-sm text-gray-600'>Equipo: <span className='font-medium text-gray-800'>{team.name}</span></p>
            <div className="flex gap-4">
              <p className='text-sm text-gray-600'>Numero: <span className='font-medium text-gray-800'>{number}</span></p>
              <p className='text-sm text-gray-600'>Edad: <span className='font-medium text-gray-800'>{calcularEdad(birthdate)}</span></p>
            </div>
        </div>

        {/* Informacion de la temporada actual */}
        <div className="p-4 bg-gray-100 w-full">
            <h2 className="text-2xl text-center font-bold mb-4">Estadisiticas de la temporada {active}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
                <span className="text-gray-600 font-medium">Posicion Actual:</span>
                <span className="text-gray-800 font-bold text-lg">{driverStats?.position || "N/A"}</span>
              </div>

              <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
                <span className="text-gray-600 font-medium">Puntos: </span>
                <span className="text-gray-800 font-bold text-lg">{driverStats?.points || 0}</span>
              </div>

              <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
                <span className="text-gray-600 font-medium">Carreras Ganadas </span>
                <span className="text-gray-800 font-bold text-lg">{driverStats?.wins || 0}</span>
              </div>

            </div>

        </div>
    </div>


  )
}
