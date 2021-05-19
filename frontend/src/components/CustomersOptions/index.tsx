import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiEdit, FiDelete } from 'react-icons/fi';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

interface ICustomer {
  id: string;
}

export interface ICustomerItemProps {
  customerColumn: ICustomer;
}


const CustomersOptions: React.FC<ICustomerItemProps> = ({ customerColumn }) => {
  const history = useHistory();

  function handleEdit() {
    history.push(`customer/${customerColumn.id}`)
  }

  async function handleDelete() {
    const data = String(customerColumn.id);

    const result = window.confirm('Está ação irá deletar todos os contratos pertinentes ao Cliente. Realmente deseja prosseguir?')


    if (result) {
      await api.delete(`customers/${data}`).then(() => {
        toast.success('Cliente foi deletado com sucesso.')
      }).catch((error) => {
        toast.error(error);
      })
    }

    toast.info('Cliente não foi removido.')
  }


  return (
    <>
      <td date-label="#">
        <button className="actions-buttons" title="Editar Contrato" onClick={handleEdit}>
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