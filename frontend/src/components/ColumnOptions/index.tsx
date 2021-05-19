import React from 'react';
import { FiEye, FiEdit, FiDelete } from 'react-icons/fi';
import api from '../../services/api';

interface ICustomer {
  id: string;
}

export interface IContractItemProps {
  customerColumn: ICustomer;
}


const ColumnOptions: React.FC<IContractItemProps> = ({ customerColumn }) => {
  async function handleDelete() {
    const data = String(customerColumn.id);

    await api.delete(`c`)
  }

  return (
    <>
      <td date-label="#">
        <button className="actions-buttons" title="Visualização Detalhada">
          <FiEye size={25} />
        </button>
        <button className="actions-buttons" title="Editar Contrato">
          <FiEdit size={25} />
        </button>
        <button className="actions-buttons" title="Excluir Contrato" onClick={handleDelete}>
          <FiDelete size={25} />
        </button>
      </td>
    </>
  );
}

export default ColumnOptions;