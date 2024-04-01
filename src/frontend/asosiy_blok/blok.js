import './blok.css'
import { Route, Routes } from 'react-router-dom'
import Nav1 from '../nawbar/navbar_box/nav1.js'
import Nav2 from '../nawbar/navbar_box/nav2.js';
import Nav3 from '../nawbar/navbar_box/nav3.js'



const BlokApp = () => {
  return (
    <div>
      <div className='blokk' >
      <Routes>
        <Route path={'/home'} Component={Nav1} />
        <Route path={'/home2'} Component={Nav2} />
        <Route path={'/home3'} Component={Nav3} />
      </Routes>
      </div>
    </div>
  )
}

export default BlokApp