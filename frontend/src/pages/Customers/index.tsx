import React, { useState } from 'react';
import { FiEye, FiEdit, FiDelete, FiPlus } from 'react-icons/fi';
import CardHeader from '../../components/CardHeader';
import SidebarMenu from '../../components/SidebarMenu';
import Select from '../../components/Select';
import './styles.css';
import { Link } from 'react-router-dom';

const Customers: React.FC = () => {
  const data = [
    {
      "id": 1,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 2,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 3,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 4,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 5,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 6,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 7,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 8,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 9,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 10,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 11,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 12,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 13,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 14,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 15,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 16,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 17,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    },
    {
      "id": 18,
      "code": "A12",
      "name": "Contrato de Compra",
      "viability": "Viabilidade Alta",
      "status": "Em Andamento",
      "client": "Governo Federal",
      "expected_finished_data": "10/02/2020",
    }
  ]
  const [viability, setViability] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');

  // const [contractPerPage, setContractPerPage] = useState(5);
  // const [offSet, setOffSet] = useState(1);
  // const [contracts, setContracts] = useState([]);
  // const [pageCount, setPageCount] = useState(0);

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
                  label="Tipo"
                  options={[
                    { value: 1, label: 'Clientes' },
                    { value: 2, label: 'Contratos' },
                  ]}
                  value={type}
                  onChange={e => setType(e.target.value)}
                />
              </div>
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
            <table className="table-customers">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Viabilidade</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Previsão de Conclusão</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="Código">{item.code}</td>
                        <td data-label="Nome">{item.name}</td>
                        <td data-label="Viabilidade">{item.viability}</td>
                        <td data-label="Status">{item.status}</td>
                        <td data-label="Cliente">{item.client}</td>
                        <td data-label="Previsão de Conclusão">{item.expected_finished_data}</td>
                        <td date-label="#">
                          <button className="actions-buttons" title="Visualização Detalhada">
                            <FiEye size={25} />
                          </button>
                          <button className="actions-buttons" title="Editar Contrato">
                            <FiEdit size={25} />
                          </button>
                          <button className="actions-buttons" title="Excluir Contrato">
                            <FiDelete size={25} />
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
          <div className="footer-buttons">
            <Link to="create-client" className="button-create">Adicionar Cliente</Link>
            <button className="button-create">Adicionar Contrato</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customers;