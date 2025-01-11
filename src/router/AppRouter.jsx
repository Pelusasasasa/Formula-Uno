import { Route, Routes } from "react-router-dom"
import { SeasonRouter } from "../season/router/SeasonRouter"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<SeasonRouter />}/>
    </Routes>
  )
}
