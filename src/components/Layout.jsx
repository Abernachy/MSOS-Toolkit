import Nav from './Nav'
import Footer from './Footer'
import layoutStyle from '../../styles/Layout.module.css'

const Layout = ({children}) => {

  return (
    <>
      <Nav />
      <div className={layoutStyle.container}>
        <main>
          {children}
        </main>
      <Footer />
      </div>
    </>
  )
}

export default Layout