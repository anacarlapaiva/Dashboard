import { NavLink } from 'react-router-dom'
import LogoImg from '../assets/image/logo.png'

const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <span className='mb'>
        <img className="logo" src={LogoImg} alt="logo da aplicação" />
      </span>

      <ul>
        <li>
          <NavLink to={'/'}>Resumo</NavLink>
        </li>
        <li>
          <NavLink to={'/vendas'}>Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav