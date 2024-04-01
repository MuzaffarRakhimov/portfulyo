

import './nav1.css';
import img from '../navbar_box/img/1579518187322.jpeg'

const Nav1 = () => {
    return (
        <div>
            <div className='divv'>
                <div className='bolim1'>
                    <img className='img' src={img} />
                </div>
                <div className='bolim2'>
                    <img className='img' src={img} />
                </div>
            </div>
            <div style={{display:'flex', }}>
                <div className='h22'><h2>JAVASCRIPT</h2></div>
                <div className='h22'><h2>NODE.JS</h2></div>
                <div className='h22'><h2> MONGODB </h2></div>
            </div>
        </div>

    )
}

export default Nav1