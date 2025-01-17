import { Route, Routes } from "react-router-dom";
import { DriverInfo } from '../pages/DriverInfo';

export const DriverRouter = () => {
    return(
        <Routes>
            <Route path="/*"  element={<DriverInfo />}/>
        </Routes>
    )
}