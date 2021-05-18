import React, { useState, useEffect } from 'react';
import { makeCode } from '../../utils/GenerateCode';
import api from '../../services/api';
import Select from '../../components/Select';
import SidebarMenu from '../../components/SidebarMenu';
import './styles.css';

interface ICustomer {
  id: string;
  name: string;
}

const CreateContract: React.FC = () => {
  useEffect(() => {
    async function loadClients() {
      const response = await api.get('customers/list');
      console.log(response.data);

      setCustomerList(response.data);
    }

    loadClients();
  }, [])


  const [customerList, setCustomerList] = useState([]);
  const [customer, setCustomer] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [viability, setViability] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [expectedFinishedDate, setExpectedFinishedDate] = useState('');

  return (
    <>
      <SidebarMenu currentPathName="/customers" />
      <div className="creact-contract-content">
        <form>
          <fieldset>
            <section>
              <legend>Dados do Contrato</legend>

              <div className="separator light"></div>

              <div className="input-wrapper">
                <label htmlFor="customer">Cliente</label>
                <select
                  name="customer"
                  id="customer"
                  value={customer}
                  onChange={e => setCustomer(e.target.value)}
                >
                  <option value="0">Selecione um Cliente</option>
                  {customerList.map((customer: ICustomer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-wrapper">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="description">Descrição</label>
                <textarea
                  maxLength={250}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <p>Máximo de caracteres: 250</p>
              </div>
            </section>
            <section className="right">
              {/* <legend>Dados do Contrato</legend>
              <div className="separator light"></div> */}
              <div className="input-group">
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="start_date">Data de Início</label>
                  <input
                    type="date"
                    id="start_date"
                    name="start_date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="expected_finish_date">Prazo de Validade</label>
                  <input
                    type="date"
                    id="expected_finish_date"
                    name="expected_finish_date"
                    value={expectedFinishedDate}
                    onChange={e => setExpectedFinishedDate(e.target.value)}
                  />
                </div>
              </div>
            </section>
          </fieldset>
          <button>Cadastrar Contrato</button>
        </form>
      </div>
    </>
  );
}

export default CreateContract;