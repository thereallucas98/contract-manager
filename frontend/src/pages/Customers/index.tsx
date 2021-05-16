import React from 'react';
import CardHeader from '../../components/CardHeader';
import SidebarMenu from '../../components/SidebarMenu';
import './styles.css';

const Customers: React.FC = () => {
  return (
    <div>
      <SidebarMenu currentPathName={window.location.pathname} />
      <div className="customer-content">
        <header className="card-headers">
          <CardHeader />
        </header>
        <main>
          <h1>Table</h1>
        </main>
      </div>
    </div>
  );
}

export default Customers;