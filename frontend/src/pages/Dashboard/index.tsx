import React from 'react';
import CardHeader from '../../components/CardHeader';
import DonutChart from '../../components/DonutChart';
import SidebarMenu from '../../components/SidebarMenu';
import './styles.css';

const Dashboard: React.FC = () => {
  return (
    <>
      <SidebarMenu currentPathName={window.location.pathname} />
      <div className="dashboard-content">
        <header>
          <CardHeader timeQuantity={30} amount={10} />
          <CardHeader timeQuantity={15} amount={10} />
          <CardHeader timeQuantity={7} amount={10} />
          <CardHeader timeQuantity={4} amount={10} />
        </header>
        <main>
          <h1>Dados sobre Contratos</h1>
          <DonutChart />
        </main>
      </div>
    </>
  );
}

export default Dashboard;