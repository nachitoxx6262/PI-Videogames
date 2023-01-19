import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Landing from "./LandingPage/Landing";
import Form from "./Form/Form";
import About from "./About/About";
import Nav from "./Nav/Nav";
import Loading from "./Loading/Loading";
import NotFound from "./NotFound/NotFound";
import GameDetail from './GameDetail/GameDetail';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="/loading" component={Loading} />
        <Route path="/:id" component={GameDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
