import { useSeasonStore } from "../../hooks/useSeasonStore";

const driver = {
  name: "Max Verstappen",
  position: 1,
  team: "Red Bull Racing",
  pitStops: 2,
  time: "1:35:20",
  image: "https://example.com/max-verstappen.jpg",
};

export const DriverInfo = () => {
    const { active } = useSeasonStore();
    const {image, name, team} = driver;

  return (
    <div className='bg-white shadow-lg w-full rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start gap-4'>
        {/* Imagen del conductor */}
        <div className='flex-shrink-0'>
            <img src={image} alt={name} className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-300' />
        </div>

        {/* Informacion del conductor */}
        <div>
            <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
            <p className='text-sm text-gray-600'>Equipo: <span className='font-medium text-gray-800'>{team}</span></p>
            <p className='text-sm text-gray-600'>Posicion: <span className='font-medium text-gray-800'>{1}</span></p>
        </div>

        {/* Informacion de la temporada actual */}
        <div className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Estadisiticas de la temporada {active}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            </div>

        </div>
    </div>


  )
}
