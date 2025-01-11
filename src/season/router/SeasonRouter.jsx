import { Route, Routes } from "react-router-dom"
import { Season } from "../pages/Season"

export const SeasonRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Season />}/>
    </Routes>    
  )
}
