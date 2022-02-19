import NavBar from "./NavBar"
// import homeStyle from "../scss/home.module.scss"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Sameer Joshi</title>
      <link rel="icon" href="/package.ico" />
    </Head>
    <NavBar />
        <div>
        {children}
        </div>
    </>
  )
}

export default Layout