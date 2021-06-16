import UserManagementCard from '../../../components/UserManagementCard/UserManagementCard';
import PortalFrame from '../../../components/PortalFrame';

const HomePage = () => {
  return (
    <PortalFrame>
      <div style={{ width: '1000px', height: '1000px' }}>
        <UserManagementCard />
      </div>
    </PortalFrame>
  );
};

export default HomePage;
