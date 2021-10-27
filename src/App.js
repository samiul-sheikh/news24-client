import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from './Component/Reuse/Navbar/Navbar';
import Homepage from './Component/Homepage/Homepage/Homepage';
import AddNews from './Component/Dashboard/AddNews/AddNews';
import Newses from './Component/Homepage/Newses/Newses';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import NewsDetail from './Component/NewsDetail/NewsDetail';
import AddAdmin from './Component/Dashboard/AddAdmin/AddAdmin';
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import International from './Component/International/International';
import AddTopNews from './Component/Dashboard/AddTopNews/AddTopNews';
import Sports from './Component/Sports/Sports';
import Country from './Component/Country/Country';

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route path="/addNews">
                            <AddNews />
                        </Route>
                        <Route path="/addTopNews">
                            <AddTopNews />
                        </Route>
                        <Route path="/addAdmin">
                            <AddAdmin />
                        </Route>
                        <Route path="/news">
                            <Newses />
                        </Route>
                        <PrivateRoute path="/info/:id">
                            <NewsDetail />
                        </PrivateRoute>
                        <Route path="/international">
                            <International />
                        </Route>
                        <Route path="/sports">
                            <Sports />
                        </Route>
                        <Route path="/country">
                            <Country />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;
