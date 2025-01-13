import React from 'react'
import { PositionAnualItem } from './PositionAnualItem'
import { rankingAnualTeam } from '../../helpers/data';

console.log(rankingAnualTeam[0])

export const TableAnualTeam = () => {
  return (
        <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2 text-pretty">Posicion</th>
                        <th className="border px-4 py-2 text-pretty">Equipo</th>
                        <th className="border px-4 py-2 text-pretty">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {rankingAnualTeam.map((elem) => (
                        <PositionAnualItem key={elem.team.id} {...elem}/>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
