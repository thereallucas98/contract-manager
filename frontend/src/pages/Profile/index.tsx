import React, { FormEvent, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/auth';
import SidebarMenu from '../../components/SidebarMenu';
import api from '../../services/api';
import './styles.css';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);


  useEffect(() => {
    async function loadUserData() {
      const response = await api.get(`profile`)

      console.log(response.data);

      setName(response.data.name);
      setEmail(response.data.email);
    };

    loadUserData();
  }, [])

  function handlePasswordView(e: FormEvent) {
    e.preventDefault();
    const currentStatus = showChangePassword ? false : true;
    console.log(currentStatus);

    setShowChangePassword(currentStatus);
  }
  return (
    <div>
      <SidebarMenu currentPathName={window.location.pathname} />

      <div className="profile-content animate-up delay-2">
        <aside className="card-profile">
          <img src="http://github.com/thereallucas98.png" alt="David Lucas" />
          <h2>{user?.name}</h2>

          <button className="button">Salvar Dados</button>
        </aside>
        <main>
          <form className={showChangePassword ? 'hide-form' : ''}>
            <fieldset>
              <legend>Dados do Perfil</legend>
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
                <label htmlFor="avatar">Link da foto</label>
                <input
                  // placeholder="https://"
                  placeholder="Em manutenção"
                  type="url"
                  id="avatar"
                  name="avatar"
                  readOnly
                />
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset className={showChangePassword === false ? 'hide-password' : ''}>
              <legend>Alteração de Senha</legend>
              <div className="input-wrapper">
                <label htmlFor="password">Senha Atual</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Nova Senha</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Confirme a Nova Senha</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
              </div>
            </fieldset>
          </form>
          <button className="button-password" onClick={handlePasswordView}>{showChangePassword ? 'Voltar' : 'Alterar a Senha'}</button>

        </main>
      </div>
    </div>
  );
}

export default Profile;