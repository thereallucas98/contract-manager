import React, { useState } from 'react';
import CardHeader from '../../components/CardHeader';
import SidebarMenu from '../../components/SidebarMenu';
import Select from '../../components/Select';
import './styles.css';
import Table from '../../components/Table';

const Customers: React.FC = () => {
  const [viability, setViability] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div>
      <SidebarMenu currentPathName={window.location.pathname} />
      <div className="customer-content">
        <header className="card-headers">
          <CardHeader timeQuantity={30} amount={10} />
          <CardHeader timeQuantity={15} amount={10} />
          <CardHeader timeQuantity={7} amount={10} />
          <CardHeader timeQuantity={4} amount={10} />
        </header>
        <main>
          <div className="search-groups">
            <div className="select-group">
              <div className="select-wrapper">
                <Select
                  name="type"
                  label="Viabilidade"
                  options={[
                    { value: 1, label: 'Visibilidade Baixa' },
                    { value: 2, label: 'Visibilidade Moderada Baixa' },
                    { value: 3, label: 'Visibilidade Moderada' },
                    { value: 4, label: 'Visibilidade Moderada Alta' },
                    { value: 5, label: 'Visibilidade Alta' }
                  ]}
                  value={viability}
                  onChange={e => setViability(e.target.value)}
                />
              </div>
              <div className="select-wrapper">
                <Select
                  name="type"
                  label="Situação"
                  options={[
                    { value: 0, label: 'Planejado' },
                    { value: 1, label: 'Em Desenvolvimento' },
                    { value: 2, label: 'Cancelado' },
                    { value: 3, label: 'Concluído' }
                  ]}
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                />
              </div>
              {/* <div className="select-wrapper">
              <label htmlFor="start_date">Data de Início</label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div> */}
              <div className="select-wrapper">
                <span></span>
                <button className="button">
                  Filtrar
              </button>
              </div>

              <div className="select-wrapper">
                <span></span>
                <button className="button delete">
                  Limpar
              </button>
              </div>
            </div>
          </div>
          <section>
            <Table />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Customers;