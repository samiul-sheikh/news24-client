import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from './Component/Reuse/Navbar/Navbar';
import Footer from './Component/Reuse/Footer/Footer';
import Homepage from './Component/Homepage/Homepage/Homepage';
import AddNews from './Component/Dashboard/AddNews/AddNews';
import Newses from './Component/Homepage/Newses/Newses';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import NewsDetail from './Component/NewsDetail/NewsDetail';
import AddAdmin from './Component/Dashboard/AddAdmin/AddAdmin';
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

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
                        <Route path="/addAdmin">
                            <AddAdmin />
                        </Route>
                        <Route path="/news">
                            <Newses />
                        </Route>
                        <PrivateRoute path="/info/:id">
                            <NewsDetail />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;
