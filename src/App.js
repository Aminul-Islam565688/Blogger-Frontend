import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import FullBlog from './pages/FullBlog/FullBlog';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/fullblog/:id">
            <FullBlog></FullBlog>
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
