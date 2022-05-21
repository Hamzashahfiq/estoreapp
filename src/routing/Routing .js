import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import HeadernavBar from "../components/headerNavBar/HeadernavBar";




export default function Routing() {
    return (
        <BrowserRouter>
            <HeadernavBar />
            <Routes>
                <Route path="/" element={<Home />} /> 
            </Routes>
        </BrowserRouter>
    )
}




