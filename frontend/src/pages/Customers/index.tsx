import React, { useState, useEffect, useCallback } from 'react';
import { FiEye, FiEdit, FiDelete, FiPlus, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';

interface ICustomer {
  id: string;
  name: string;
  email: string;
}

const Customers: React.FC = () => {

  const [viability, setViability] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('1');

  const [customers, setCustomers] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadCustomers() {
      const response = await api.get(`customers?take=${limit}&skip=${currentPage}`
      );
      console.log(response);
      console.log(response.headers)
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
  }, [currentPage, limit, total]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

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
                      );
                    })
                  ) : (
                    <tr>
                        <td data-label="Código">ABDC</td>
                        <td data-label="Nome">TESTE</td>
                        <td data-label="Viabilidade">ALTA</td>
                        <td data-label="Status">EM ANDAMENTO</td>
                        <td data-label="Cliente">STEVE ROGERS</td>
                        <td data-label="Previsão de Conclusão">20/10/2021</td>
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
                }
              </tbody>
            </table>
          </section>
          <div className="pagination">
            {/* <span>Total de Páginas {total}</span> */}
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