import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
import localStorageKeys from './configs/localStorageKeys';
import './index.css';
import paths from './configs/paths';
import { verifyAdminAuthentication } from './store/authen';
import Login from './view/pages/Login';
import LandingPage from './view/pages/LandingPage';
import HomePage from './view/pages/HomePage';
import UITestPage from './view/pages/UITestPage';
import ModManage from './view/pages/ModManage';
import UserManage from './view/pages/UserManage';
import ReportPage from './view/pages/ReportPage';
// import PortalLayoutRoute from './view/routes/PortalLayoutRoute';
// import LandingLayoutRoute from './view/routes/LandingLayoutRoute';

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
        <Router>
          <Switch>
            <Route exact path={paths.BASE} component={LandingPage} />
            <Route exact path={paths.LOGIN} component={Login} />
            <Route exact path={paths.UITEST} component={UITestPage} />
            <Route exact path={paths.HOME} component={HomePage} />
            <Route path={paths.USER_MANAGE} component={UserManage} />
            <Route path={paths.MOD_MANAGE} component={ModManage} />
            <Route path={paths.REPORT}>
              <ReportPage />
            </Route>
            {/* <LandingLayoutRoute
              exact
              path={paths.BASE}
              component={LandingPage}
            />
            <LandingLayoutRoute exact path={paths.LOGIN} component={Login} />
            <LandingLayoutRoute
              exact
              path={paths.UITEST}
              component={UITestPage}
            />
            <PortalLayoutRoute exact path={paths.HOME}>
              <HomePage />
            </PortalLayoutRoute>
            <PortalLayoutRoute
              exact
              path={paths.USER_MANAGE}
              component={UserManage}
            ></PortalLayoutRoute> */}
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

const mapStateToProps = (state) => ({
  isValidating: state.authen.isValidating
});

export default connect(mapStateToProps)(App);
