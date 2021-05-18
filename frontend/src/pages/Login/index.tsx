import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [option, setOption] = useState('1');
  const [nameLogin, setNameLogin] = useState('');
  const [nameCreate, setNameCreate] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [emailCreate, setEmailCreate] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [passwordCreate, setPasswordCreate] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (emailLogin === '' || passwordLogin === '') {
      toast.error('Campos vazios, por favor verifique!');
    }

    await signIn(emailLogin, passwordLogin);
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    toast.info('Create')
  }

  return (
    <div className="container-login">
      <section id="left-section">
        <h1>
          <span>Manager</span>
          <span>Your</span>
          <span>Business</span>
        </h1>
      </section>
      <section id="right-section">
        {
          option === '1' ? (
            <form action="">
              <fieldset>
                <legend>Realize o seu Login</legend>
                <div className="separator light"></div>

                <div className="input-wrapper">
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={emailLogin}
                    onChange={e => setEmailLogin(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Senha</label>
                  <input
                    placeholder="***********"
                    type="password"
                    id="password"
                    name="password"
                    value={passwordLogin}
                    onChange={e => setPasswordLogin(e.target.value)}
                  />
                </div>
              </fieldset>
              <button className="button-access" onClick={handleLogin} onTouchStart={handleLogin}>
                Acessar
            </button>
              <span className="span-click" onClick={() => setOption('2')}>Não possui conta? Crie uma!</span>
            </form>
          ) : (
            <form>
              <fieldset>
                <legend>Realize o seu cadastro</legend>
                <div className="separator light"></div>

                <div className="input-wrapper">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={nameCreate}
                    onChange={e => setNameCreate(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={emailCreate}
                    onChange={e => setEmailCreate(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Senha</label>
                  <input
                    placeholder="***********"
                    type="password"
                    id="password"
                    name="password"
                    value={passwordCreate}
                    onChange={e => setPasswordCreate(e.target.value)}
                  />
                </div>
              </fieldset>
              <button className="button-access" onClick={handleCreate}>
                Cadastrar
            </button>
              <span className="span-click" onClick={() => setOption('1')}>Já possuo uma conta!</span>
            </form>
          )
        }
      </section>
    </div>
  );
}

export default Login;