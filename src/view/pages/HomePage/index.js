import UserManagementCard from '../../../components/UserManagementCard/UserManagementCard';
import PortalFrame from '../../../components/PortalFrame';

const HomePage = () => {
  return (
    <PortalFrame>
      <div>
        <UserManagementCard />
      </div>
    </PortalFrame>
  );
};

export default HomePage;
