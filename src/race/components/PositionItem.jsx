

export const PositionItem = ({driver, laps, pits, position, team,time}) => {
  return (
    <tr className="even:bg-gray-100">
        <td className="border px-4 py-2">{position}</td>
        <td className="border px-4 py-2 flex items-center gap-2">
            {driver.image !== '' && <img src={driver.image} alt={driver.name} className="w-8 h-8 rounded-full object-cover" />}
            {driver.name}
        </td>
        <td className="border px-4 py-2">{team.name}</td>
        <td className="border px-4 py-2 text-center">{pits}</td>
        <td className="border px-4 py-2">{time}</td>
    </tr>
  )
}
