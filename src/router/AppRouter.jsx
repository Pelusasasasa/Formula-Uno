import { Route, Routes } from "react-router-dom"
import { SeasonRouter } from "../season/router/SeasonRouter"
import { DriverRouter } from "../driver/router/DriverRouter";;

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/driver/*' element={<DriverRouter />}/>
        <Route path='/*' element={<SeasonRouter />}/>
    </Routes>
  )
}
