import React from 'react';
import SidebarMenu from '../../components/SidebarMenu';

const Dashboard: React.FC = () => {
  return (
    <div>
      <SidebarMenu currentPathName={window.location.pathname} />
      <h1>Dashboard Page</h1>
    </div>
  );
}

export default Dashboard;