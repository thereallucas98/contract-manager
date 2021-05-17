import React, { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


const Login: React.FC = () => {
  const [option, setOption] = useState('1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    toast.info('Hello');
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Senha</label>
                  <input
                    placeholder="***********"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
                  <label htmlFor="password">Senha</label>
                  <input
                    placeholder="***********"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </fieldset>
              <button className="button-access">
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