import React, { useState } from 'react';
import './styles.css';

const Table: React.FC = () => {
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
  const [contractPerPage, setContractPerPage] = useState(5);
  const [offSet, setOffSet] = useState(1);
  const [contracts, setContracts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  return (
    <>
      <table className="table-customers">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
            <th scope="col">Viabilidade</th>
            <th scope="col">Status</th>
            <th scope="col">Cliente</th>
            <th scope="col">Previsão de Conclusão</th>
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;