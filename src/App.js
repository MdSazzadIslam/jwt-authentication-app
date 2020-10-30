import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/registration"
            exact={true}
            render={(props) => <Registration {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

///for your kind information JWT token will generate in backend API project after successfull authentication
//i will save that token in local storage aftet that i will pass that token through headers so that i can access the API
