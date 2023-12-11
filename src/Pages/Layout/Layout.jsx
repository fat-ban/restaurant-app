import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

import "./Layout.css"

const Layout = () => {

  return (
   <div className='layout bg-dark'>
   <NavBar/>
   <Outlet/>
   <Footer/>
   </div>
  )
   
   
}

export default Layout
