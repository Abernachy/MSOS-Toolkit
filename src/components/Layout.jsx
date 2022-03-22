import Nav from './Nav'
import Footer from './Footer'
import Head from 'next/head'
import layoutStyle from '../../styles/Layout.module.css'

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>621 MSOS</title>
        <meta name="keywords" content=" 621 MSOS , 621 Mission Support Operations Squadron, MSOS Toolkit" key="keywords" />
        <meta name="description" content="621 MSOS Toolkit" key="description" />
        <meta name="author" content="Michael Mason" key="author"/>
        <meta name="viewport" content="width=device-width , initial-scale=1.0" key="viewport" />
      </Head>
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