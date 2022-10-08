import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { New } from "./New";
import { List } from "./List";

function App() {
  return (
    <BrowserRouter>
    <ul>
      <br />
      <li><Link to="/list">List</Link></li>
      <br />
      <li><Link to="/new">New</Link></li>
    </ul>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/new">
          <New />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
