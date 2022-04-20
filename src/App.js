
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import {productInputs, userInputs} from "./formSource";
/* yarn add react-router-dom */
import "./style/dark.scss";
import {useContext} from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    const currentUser =true;
    const RequireAuth = ({children}) =>{ return currentUser ? children: <Navigate to="/login"/>}
    return (
        <div className={darkMode ? "app dark" : "app"}>
       
            <BrowserRouter>
                <Routes>
                    <Route path="/"/>
                    <Route path="login" element={<Login/>}/>{/* Login page */}
                    <Route index element={<RequireAuth><Home/></RequireAuth>}/>{/* Home is default */}
                    <Route path="users">
                        <Route index element={<RequireAuth><List/></RequireAuth>}/>
                        <Route path=":Userid" element={<Single/>}/>{/* Single user page */}
                        <Route path="new"
                               element={<RequireAuth><New inputs={userInputs} title="Add New User"/></RequireAuth>}/> {/* New user page */}
                    </Route>
                    <Route path="products">
                        <Route index element={<RequireAuth><List/></RequireAuth>}/>{/* List of products */}
                        <Route path=":Productid" element={<RequireAuth><Single/></RequireAuth>}/>{/* Single product page */}

                        <Route path="new"
                               element={<RequireAuth><New inputs={productInputs} title="Add New Product"/></RequireAuth>}/>{/* New product page */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
