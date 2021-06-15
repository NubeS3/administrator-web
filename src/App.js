import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import localStorageKeys from './configs/localStorageKeys';
import './index.css';
import paths from './configs/paths';
import { verifyAdminAuthentication } from './store/authen';
import Login from './view/pages/Login/index.js';
import LandingPage from './view/pages/LandingPage';
import PageFrame from './components/PageFrame';
import UserManage from './view/pages/UserManage';
import HomePage from './view/pages/HomePage';

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
    <Suspense fallback={<div>Loading ...</div>}>
      <div className="App">
        <PageFrame>
          <Router>
            <Switch>
              <Route exact path={paths.BASE} component={LandingPage} />
              <Route exact path={paths.LOGIN} component={Login} />
              <Route exact path={paths.UITEST} component={Login} />
              <Switch>
                <Route exact path={paths.HOME}>
                  <HomePage />
                </Route>
                <Route
                  exact
                  path={paths.USER_MANAGE}
                  component={UserManage}
                ></Route>
              </Switch>
            </Switch>
          </Router>
        </PageFrame>
      </div>
    </Suspense>
  );
}

const mapStateToProps = (state) => ({
  isValidating: state.authen.isValidating
});

export default connect(mapStateToProps)(App);
