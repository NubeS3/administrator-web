import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ErrorLog from './components/ErrorLog';
import UsageReport from './components/Usage';
import PortalFrame from '../../../components/PortalFrame';

const ReportPage = () => {
  const match = useRouteMatch();
  return (
    <PortalFrame>
      <div className="h-screen lg:block relative w-full">
        <Switch>
          <Route exact path={`${match.url}/`}>
            <UsageReport />
          </Route>
          <Route exact path={`${match.url}/error-log`}>
            <ErrorLog />
          </Route>
        </Switch>
      </div>
    </PortalFrame>
  );
};

export default ReportPage;
