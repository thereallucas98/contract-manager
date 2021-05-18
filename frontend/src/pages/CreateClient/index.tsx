import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import SidebarMenu from '../../components/SidebarMenu';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import api from '../../services/api';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreateClient: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighbor, setNeighbor] = useState('');
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") return;

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  }

  async function handleCreateClient(e: FormEvent) {
    e.preventDefault();

    const result = [name, email, phone, street, number, neighbor].every(e => e === '');
    
    if (result === true || selectedCity === '0' || selectedUf === '0') {
      toast.error('Alguns campos importantes se encontram vazio, por favor verifique!');
    }

    const data = {
      name,
      email,
      phone,
      street,
      number,
      neighbor,
      complement,
      city: selectedCity,
      state: selectedUf,
    }

    await api.post('customers', data).then(() => {
      toast.success(`Cliente ${name} cadastrado com sucesso.`)
    }).catch((error) => {
      toast.error(error);
    })
    
    setName('');
    setEmail('');
    setPhone('');
    setStreet('');
    setNumber('');
    setComplement('');
    setNeighbor('');
    setSelectedCity('0');
    setSelectedUf('0');

  }
  return (
    <>
      <SidebarMenu currentPathName="/customers" />
      <div className="client-content animate-up delay-2">
        <form>
          <fieldset className="left-side">
            <legend>Dados Pessoais</legend>
            <div className="separator light"></div>

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
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset className="right-side">
            <legend>Endereço</legend>
            <div className="separator light"></div>
            <div className="input-group">
              <div className="input-wrapper" style={{ width: '100%' }}>
                <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={street}
                  onChange={e => setStreet(e.target.value)}
                />
              </div>
              <div className="input-wrapper" style={{ width: '20%', marginLeft: 5 }}>
                <label htmlFor="number">Nº</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={complement}
                onChange={e => setComplement(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="neighbor">Bairro</label>
              <input
                type="text"
                id="neighbor"
                name="neighbor"
                value={neighbor}
                onChange={e => setNeighbor(e.target.value)}
              />
            </div>
            <div className="input-group">
              <div className="input-wrapper" style={{ width: '30%', marginRight: 5 }}>
                <label htmlFor="uf">Estado</label>
                <select
                  name="uf"
                  id="uf"
                  value={selectedUf}
                  onChange={handleSelectUf}
                >
                  <option value="0">UF</option>
                  {ufs.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-wrapper">
                <label htmlFor="city">Cidade</label>
                <select
                  name="uf"
                  id="uf"
                  value={selectedCity}
                  onChange={handleSelectCity}
                >
                  <option value="0">Selecione uma Cidade</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>
        </form>
        <button onClick={handleCreateClient}>Cadastrar</button>
      </div>
    </>
  );
}

export default CreateClient;