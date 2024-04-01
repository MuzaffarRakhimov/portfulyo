import './nav2.css';
import foto from './img/photo_2024-03-31_15-12-00.jpg'

const Nav2 = () => {
    return (
        <div>
            <div className='navv1'>

                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto1" alt='foto'/>
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto2" alt='foto' />
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto3" alt='foto' />
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto4" alt='foto'/>
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto5" alt='foto'/>
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto6" alt='foto'/>
                    </div>
                </div>
                <div className="avtarfoto">
                    <div >
                        <img src={foto} className="foto7" alt='foto'/>
                    </div>
                </div>
            </div>
            <hr />
            <div className='navv2'>
                <div className='malumot'>
                <h3>Malumotim</h3>
                <p>Men Raximov Muzaffar 1991-yilda tug'ilganman </p>
                <p>2022-yida Toshkent <b>ITPARK-ITCENTER</b>  markazini QAshqadaryo viloyati Qarshi filialining
                   <b> -- Front-end programming -- </b>  yo'nalishida o'qib chiqdim  va 2023 - yilda o'zim mustaqil
                  <b>  -- Node JS -- backend</b> yo'nalishini o'rganib chiqdim.
                    Hozirda <b> -- MERN stack -- </b> yo'nalishida mashg'ulot olib boryabman
                </p>
                </div>
                
            </div>


        </div>
    )
}

export default Nav2