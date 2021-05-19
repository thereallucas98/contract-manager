import React, { useState, useEffect, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
// import { makeCode } from '../../utils/GenerateCode';
import api from '../../services/api';
import Select from '../../components/Select';
import SidebarMenu from '../../components/SidebarMenu';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

// interface ICustomer {
//   id: string;
//   name: string;
// }

interface ClientParams {
  id: string;
}

const EditContract: React.FC = () => {

  const params = useParams<ClientParams>();
  const [owner, setOwner] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [viability, setViability] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    api.get(`contracts/${params.id}`).then(response => {
      console.log(response.data);

      setOwner(response.data.customer.id);
      setOwnerName(response.data.customer.name);
      setName(response.data.name);
      setDescription(response.data.description);
      setViability(response.data.viability);
      setStatus(response.data.status);

    })
  }, [params.id])

  async function handleEditContract(e: FormEvent) {
    e.preventDefault();
    const result = [name, description, viability, status].every(e => e === '');

    if (result === true) {
      toast.error('Alguns campos importantes se encontram vazio, por favor verifique!')
    }

    let date = new Date();

    let finishedDate = String(date.toISOString());

    if (Number(status) === 2 || Number(status) === 3) {
      const data = {
        name,
        description,
        viability: viability,
        status: status,
        finished_date: finishedDate,
      }

      await api.put(`contracts/${params.id}`, data).then(() => {
        toast.success('Contrato atualizado com sucesso')
      }).catch((error) => {
        toast.error(error);
      });
    } else {
      const data = {
        name,
        description,
        viability: viability,
        status: status,
      }

      await api.put(`contracts/${params.id}`, data).then(() => {
        toast.success('Contrato atualizado com sucesso')
      }).catch((error) => {
        toast.error(error);
      });
    }
  }

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
                  value={owner}
                // onChange={e => setOwner(e.target.value)
                >
                  <option value={owner}>{ownerName}</option>
                  {/* {customerList.map((customer: ICustomer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))} */}
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
                      { value: 0, label: 'Visibilidade Baixa' },
                      { value: 1, label: 'Visibilidade Moderada Baixa' },
                      { value: 2, label: 'Visibilidade Moderada' },
                      { value: 3, label: 'Visibilidade Moderada Alta' },
                      { value: 4, label: 'Visibilidade Alta' }
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
            </section>
          </fieldset>
          <button onClick={handleEditContract}>Atualizar Contrato</button>
        </form>
      </div>
    </>
  );
}

export default EditContract;