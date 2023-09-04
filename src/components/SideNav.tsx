import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <span className='mb'>
        Fintech Logo
      </span>

      <ul>
        <li>
          <NavLink to={'/'}>Resumo</NavLink>
        </li>
        <li>
          <NavLink to={'/vendas'}>Vendas</NavLink>
        </li>
        <li>
          <a >WebHooks</a>
        </li>
        <li>
          <a>Configurações</a>
        </li>
        <li>
          <a>Contato</a>
        </li>
        <li>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav