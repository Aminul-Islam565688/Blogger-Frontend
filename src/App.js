import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Dashboard from "./pages/Dashboard/Dashboard";
import FullBlog from './pages/FullBlog/FullBlog';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import PostBlog from "./pages/PostBlog/PostBlog";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/fullblog/:id">
            <FullBlog></FullBlog>
          </Route>
          <Route path="/postblog">
            <PostBlog></PostBlog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
