
export const PositionAnualItem = ({points, position, team}) => {
  return (
    <tr className="even:bg-gray-100">
        <td className="border px-4 py-2">{position}</td>
        <td className="border px-4 py-2 flex items-center gap-2">
            {team.logo !== '' && <img src={team.logo} alt={team.name} className="w-10 h-10 rounded-full object-cover" />}
            {team.name}
        </td>
        <td className="border px-4 py-2 text-center">{points}</td>
    </tr>
  )
}
