import Nav from './components/common/Nav';
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom';
import routes from './Routes';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          {
            routes.map(value => 
              <Route exact path={value.path} component={value.page} key={value.name} />
            )
          }
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
