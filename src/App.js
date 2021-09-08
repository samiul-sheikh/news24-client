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
import Login from './Component/Login/Login/Login';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/addNews">
                        <AddNews />
                    </Route>
                    <Route path="/news">
                        <Newses />
                    </Route>
                    {/* <Route path="/login">
                        <Login />
                    </Route> */}
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
