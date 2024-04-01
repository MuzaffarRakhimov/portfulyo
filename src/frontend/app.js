import './app.css';
import Rasm from './nawbar/navbar_box/img/supermiya.jpeg'

import NavbarApp from './nawbar/navbar.js';
import BlokApp from './asosiy_blok/blok.js';
import Footerr from './footerr/footerr.js'


const AsosApp =()=>{


    return (
        <div className='app'style={{backgroundImage:`url( ${Rasm} )`, opacity:.9}}>
            <NavbarApp />
            <BlokApp />
            <Footerr />
           
        </div>
    )



}

export default AsosApp