import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import './styles.css';

interface SidebarMenuProps {
  currentPathName: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ currentPathName }) => {
  const { signOut, user } = useAuth();

  async function handeSignOut() {
    signOut();
  }
  
  return (
    <div className="sidebar-menu">
      <section className="profile-photo">
        <img src="http://github.com/thereallucas98.png" alt="Profile" />
      </section>
      <section className="options-menu">
        <div className="paths">
          <Link to="/" className={currentPathName === '/' ? 'selected' : ''}>
            <FiHome size={30} />
            Início
          </Link>

          <Link to="/customers" className={currentPathName === '/customers' ? 'selected' : ''}>
            <FiUser size={30} />
            Clientes
          </Link>

          <Link to={`/profile/${user?.id}`} className={currentPathName === '/profile' ? 'selected' : ''}>
            <FiSettings size={30} />
            Meu Perfil
          </Link>
        </div>
      </section>
      <Link to="" onClick={handeSignOut}>
        <FiLogOut size={30} />
          Sair
      </Link>
    </div>
  );
}

export default SidebarMenu;