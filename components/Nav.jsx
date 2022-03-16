import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Navbar = () => {

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
        <Link href='/'>Home Page</Link>
        <Link href='/eagle'>EAGLE Resources </Link>
        <Link href='/amlo'>AMLO Resources </Link>
        <Link href='/airlift'>Airlift Resources </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar