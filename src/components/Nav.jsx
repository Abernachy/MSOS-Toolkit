import Link from 'next/link'
import navStyles from '../../styles/Nav.module.css'
import {navLinks} from '../utils/linkdata'

const Navbar = () => {

  return (
    <header>
   
    <nav className={navStyles.nav}>
       <div>
      MSOS Brand
    </div>
       {navLinks.map((link, index) => {
      return (
        <ul>
          <Link href={link.path} key={link.index}>
            {link.name}
          </Link>
        </ul>
      );
        })}
    </nav>
    </header>
  )
}

export default Navbar

