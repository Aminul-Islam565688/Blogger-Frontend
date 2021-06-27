import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import FullBlog from './pages/FullBlog/FullBlog';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import PostBlog from "./pages/PostBlog/PostBlog";


export const UserContext = createContext();


function App() {
  const [isUser, setIsUser] = useState({})
  return (
    <>
      <UserContext.Provider value={[isUser, setIsUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/fullblog/:id">
              <FullBlog></FullBlog>
            </Route>
            <PrivateRoute path="/postblog">
              <PostBlog></PostBlog>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </UserContext.Provider>
    </>
  );
}

export default App;
