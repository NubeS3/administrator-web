import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import localStorageKeys from './configs/localStorageKeys';
import './index.css';
import paths from './configs/paths';
import { verifyAdminAuthentication } from './store/authen';
import Login from './view/pages/Login';
import LandingPage from './view/pages/LandingPage';

function App(props) {
  const mount = async () => {
    await store.dispatch(
      verifyAdminAuthentication({
        adminToken: localStorage.getItem(localStorageKeys.TOKEN_ADMIN)
      })
    );
  };

  useEffect(() => {
    mount();
  }, []);

  if (props.isValidating) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path={paths.BASE} component={LandingPage} />
          <Route exact path={paths.LOGIN} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isValidating: state.authen.isValidating
});

export default connect(mapStateToProps)(App);
