import './navbar.css'
import {Link} from 'react-router-dom'

const NavbarApp = () => {
  
  return (
    
      <div className='navbor'>
      <Link to ={'/home'} className='link'> <h4>Assosiy </h4> </Link>
      <Link to ={'/home2'} className='link'> <h4>Men haqimda </h4> </Link>
      <Link to ={'/home3'} className='link'> <h4>O'qiganlarim</h4> </Link>
        
      </div>
  

  )
}

export default NavbarApp


