import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import './styles.css';

interface SidebarMenuProps {
  currentPathName: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ currentPathName }) => {
  return (
    <div className="sidebar-menu">
      <section className="profile-photo">
        <img src="http://github.com/thereallucas98.png" alt="Profile" />
      </section>
      <section className="options-menu">
        <div className="paths">
          <Link to="/dashboard" className={currentPathName === '/dashboard' ? 'selected' : ''}>
            <FiHome size={30} />
            Início
          </Link>

          <Link to="/customers" className={currentPathName === '/customers' ? 'selected' : ''}>
            <FiUser size={30} />
            Clientes
          </Link>

          <Link to="/profile" className={currentPathName === '/profile' ? 'selected' : ''}>
            <FiSettings size={30} />
            Meu Perfil
          </Link>
        </div>
      </section>
      <Link to="/">
        <FiLogOut size={30} />
          Sair
      </Link>
    </div>
  );
}

export default SidebarMenu;