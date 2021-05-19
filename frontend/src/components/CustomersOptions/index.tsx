import React from 'react';
import { toast } from 'react-toastify';
import { FiEye, FiEdit, FiDelete } from 'react-icons/fi';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

interface ICustomer {
  id: string;
}

export interface ICustomerItemProps {
  customerColumn: ICustomer;
}


const CustomersOptions: React.FC<ICustomerItemProps> = ({ customerColumn }) => {
  async function handleDelete() {
    const data = String(customerColumn.id);

    const result = window.confirm('Está ação irá deletar todos os contratos pertinentes ao Cliente. Realmente deseja prosseguir?')

    await api.delete(`customers/${data}`).then(() => {
      toast.success('Cliente foi deletado com sucesso.')
    }).catch((error) => {
      toast.error(error);
    })
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

export default CustomersOptions;