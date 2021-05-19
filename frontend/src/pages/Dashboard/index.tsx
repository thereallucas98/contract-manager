import React, { useState, useEffect } from 'react';
import {
  parseISO,
  isBefore,
  addDays
} from 'date-fns';
import CardHeader from '../../components/CardHeader';
import DonutChart from '../../components/DonutChart';
import SidebarMenu from '../../components/SidebarMenu';
import api from '../../services/api';
import './styles.css';

const Dashboard: React.FC = () => {
  const [thirty, setThirty] = useState(0);
  const [fifteen, setFifteen] = useState(0);
  const [ten, setTen] = useState(0);
  const [four, setFour] = useState(0);

  useEffect(() => {
    async function handleQuantity() {
      const allContracts = await api.get('/contracts/list');
      let quantityThirties = 0;
      let quantityFifties = 0;
      let quantityTens = 0;
      let quantityFours = 0;

      let thirtyDays = addDays(new Date(), 30);
      console.log(thirtyDays);
      let fifteenDays = addDays(new Date(), 15);
      console.log(fifteenDays);
      let tenDays = addDays(new Date(), 10);
      console.log(tenDays);
      let fourDays = addDays(new Date(), 4);
      console.log(fourDays);

      for (let i = 0; i < allContracts.data.length; i++) {
        console.log(parseISO(String(allContracts.data[i].expected_finished_date)))


        if (parseISO(String(allContracts.data[i].expected_finished_date)) >= thirtyDays) {
          quantityThirties++;
        } else if (parseISO(String(allContracts.data[i].expected_finished_date)) >= fifteenDays) {
          quantityFifties++;
        } else if (parseISO(String(allContracts.data[i].expected_finished_date)) >= tenDays) {
          quantityTens++;
        } else if (parseISO(String(allContracts.data[i].expected_finished_date)) >= fourDays) {
          quantityFours++;
        } else {
          console.log('Passou!')
        }
      }

      setThirty(quantityThirties);
      setFifteen(quantityFifties);
      setTen(quantityTens);
      setFour(quantityFours);

    }

    handleQuantity();
  }, [])

  return (
    <>
      <SidebarMenu currentPathName={window.location.pathname} />
      <div className="dashboard-content">
        <header>
          <CardHeader timeQuantity={30} amount={thirty} />
          <CardHeader timeQuantity={15} amount={fifteen} />
          <CardHeader timeQuantity={7} amount={ten} />
          <CardHeader timeQuantity={4} amount={four} />
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