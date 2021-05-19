import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiEye, FiEdit, FiDelete } from 'react-icons/fi';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

interface ICustomer {
  id: string;
}

export interface IContractItemProps {
  customerColumn: ICustomer;
}


const ColumnOptions: React.FC<IContractItemProps> = ({ customerColumn }) => {
  const history = useHistory();

  function handleEdit() {
    history.push(`contract/${customerColumn.id}`)
  }

  async function handleDelete() {
    const data = String(customerColumn.id);

    const result = window.confirm('Está ação irá deletar todos o contrato do cliente.')

    if (result) {
      await api.delete(`contracts/${data}`).then(() => {
        toast.success('Contrato deletado com sucesso!');
      }).catch((error) => {
        toast.error(error);
      })
    }
  }

  return (
    <>
      <td date-label="#">
        {/* <button className="actions-buttons" title="Visualização Detalhada">
          <FiEye size={25} />
        </button> */}
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

export default ColumnOptions;