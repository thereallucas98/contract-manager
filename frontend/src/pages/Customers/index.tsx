import React, { useState, useEffect, useCallback } from 'react';
import { FiEye, FiEdit, FiDelete, FiPlus, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu';
import CustomersOptions, {ICustomerItemProps } from '../../components/CustomersOptions';
import ColumnOptions, { IContractItemProps } from '../../components/ColumnOptions';
import Select from '../../components/Select';
import Th from '../../components/Line';
import api from '../../services/api';
import './styles.css';

interface ICustomer {
  id: string;
  name: string;
  email: string;
}

interface IContracts {
  id: string;
  name: string;
  code: string;
  viability: number;
  status: number;
  expected_finished_date: string;
  customer: ICustomer;
}

const Customers: React.FC = () => {

  const [viability, setViability] = useState('1');
  const [status, setStatus] = useState('0');
  const [type, setType] = useState('1');

  const [customers, setCustomers] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalContracts, setTotalContracts] = useState(0);
  const [limit, setLimit] = useState(5);
  const [limitContracts, setLimitContracts] = useState(5);
  const [pages, setPages] = useState([]);
  const [pagesContracts, setPagesContracts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageContract, setCurrentPageContract] = useState(1);

  useEffect(() => {
    async function loadContracts() {
      const responseContracts = await api.get(`contracts?take=${limitContracts}&skip=${currentPageContract}&status=${status}&viability=${viability}`);
      console.log(responseContracts.data);
      setTotalContracts(responseContracts.data.total);

      const totalPages = Math.ceil(totalContracts / limitContracts);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPagesContracts(arrayPages as []);
      setContracts(responseContracts.data.contracts);
    }

    loadContracts();
  }, [currentPageContract, limitContracts, totalContracts, status, viability, contracts]);


  useEffect(() => {
    async function loadCustomers() {
      const response = await api.get(`customers?take=${limit}&skip=${currentPage}`
      );
      // console.log(response);
      // console.log(response.headers)
      setTotal(response.data.total);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages as []);
      setCustomers(response.data.customers);
      console.log(response.data.customers);
    }

    loadCustomers();
  }, [currentPage, limit, total, customers]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  const limitsContract = useCallback((e) => {
    setLimitContracts(e.target.value);
    setCurrentPageContract(1);
  }, [])

  // async function handleDeleteProject(id: string) {
  //   alert(id);
  // }

  return (
    <div>
      <SidebarMenu currentPathName={window.location.pathname} />
      <div className="customer-content animate-up delay-2">
        <header className="card-headers">
        </header>
        <main>
          <div className="search-groups">
            <div className="select-group">
              <div className="select-wrapper allowed-selects">
                <Select
                  name="type"
                  label="Tipo"
                  className="allowed-selects"
                  options={[
                    { value: '1', label: 'Clientes' },
                    { value: '2', label: 'Contratos' },
                  ]}
                  value={type}
                  onChange={e => setType(e.target.value)}
                />
              </div>
              <div className={type === '1' ? 'not-allowed-change' : 'allowed-selects select-wrapper'}>
                <Select
                  name="type"
                  label="Viabilidade"
                  title={type === '1' ? 'Filtro inexistente na Tabela de Clientes' : 'Realize o Filtro por Viabilidade'}
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
              <div className={type === '1' ? 'not-allowed-change' : 'allowed-selects select-wrapper'}>
                <Select
                  name="type"
                  label="Situação"
                  title={type === '1' ? 'Filtro inexistente na Tabela de Clientes' : 'Realize o Filtro por Situação'}
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
          </div>
          <section>
            <table className="table-customers">
              <thead>
                {
                  type === '1' ? (
                    <tr>
                      {/* <th scope="col">Código</th> */}
                      <th scope="col">Nome</th>
                      <th scope="col">Email</th>
                      <th scope="col">#</th>
                    </tr>
                  ) : (
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Viabilidade</th>
                      <th scope="col">Status</th>
                      <th scope="col">Cliente</th>
                      <th scope="col">Previsão de Conclusão</th>
                      <th scope="col">#</th>
                    </tr>
                  )
                }
              </thead>
              <tbody>
                {
                  type === '1' ? (
                    customers.map((customer: ICustomer) => {
                      return (
                        <tr key={customer.id}>
                          {/* <td data-label="Código">{customer.id}</td> */}
                          <td data-label="Nome">{customer.name}</td>
                          <td data-label="Email">{customer.email}</td>
                          <CustomersOptions customerColumn={customer} />
                        </tr>
                      );
                    })
                  ) : (
                    contracts.map((contract: IContracts) => {
                      return (
                        <tr key={contract.id}>
                          <td data-label="Código">{contract.code}</td>
                          <td data-label="Nome">{contract.name}</td>
                          <td data-label="Viabilidade">
                            {
                              contract.viability === 0 ? 'Visiblidade Baixa' :
                                contract.viability === 1 ? 'Visibilidade Moderada Baixa' :
                                  contract.viability === 2 ? 'Visiblidade Moderada' :
                                    contract.viability === 3 ? 'Visibilidade Moderada Alta' : 'Visibilidade Alta'
                            }
                          </td>
                          <td data-label="Status">
                            {
                              contract.status === 0 ? 'Parado' :
                                contract.status === 1 ? 'Em Andamento' : 'Finalizado'
                            }
                          </td>
                          <td data-label="Cliente">{contract.customer.name}</td>
                          <Th dateToConvert={contract.expected_finished_date} />
                          <ColumnOptions customerColumn={contract} />
                        </tr>
                      )
                    })
                  )
                }
              </tbody>
            </table>
          </section>
          <div className="pagination">
            {
              type === '1' ? (
                <div className="pagination-button">
                  {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                      <FiArrowLeft size={25} />
                    </button>
                  )}
                  {pages.map((page) => (
                    <div
                      className={page === currentPage ? 'selected-page item' : ' item'}
                      key={page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </div>
                  ))}
                  {currentPage < pages.length && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                      <FiArrowRight size={25} />
                    </button>
                  )}
                </div>
              ) : (
                <div className="pagination-button">
                  {currentPageContract > 1 && (
                    <button onClick={() => setCurrentPage(currentPageContract - 1)}>
                      <FiArrowLeft size={25} />
                    </button>
                  )}
                  {pagesContracts.map((page) => (
                    <div
                      className={page === currentPageContract ? 'selected-page item' : ' item'}
                      key={page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </div>
                  ))}
                  {currentPageContract < pagesContracts.length && (
                    <button onClick={() => setCurrentPage(currentPageContract + 1)}>
                      <FiArrowRight size={25} />
                    </button>
                  )}
                </div>
              )
            }
          </div>
          <div className="footer-buttons">
            <Link to="create-client" className="button-create">Adicionar Cliente</Link>
            <Link to="create-contract" className="button-create">Adicionar Contrato</Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customers;