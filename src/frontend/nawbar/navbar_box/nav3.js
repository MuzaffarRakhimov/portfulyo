import './nav3.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Nav3 = () => {
    const percentage = 66;
    return (

        <div>

            <h3>DASTURLASH TILLARI VA FRENVORKLAR</h3>
            <hr />
            <div className='divprog'>

                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>HTML - CSS </p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>JAVASCRIPT </p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>NODE.JS  </p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={50} text={`${50}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>EXPRESS.JS</p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={50} text={`${50}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>REACT.JS </p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={60} text={`${60}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={50} text={`${50}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>TAILWIND.CSS</p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={50} text={`${50}%`} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='progres'>
                    <div className='ichkiprog1'>
                        <p>MONGODB</p>
                    </div>
                    <div className='ichkiprog2'>
                        <div className='progbarr'>
                            <CircularProgressbar value={50} text={`${50}%`} />
                        </div>
                    </div>
                </div>
                

            </div>
        </div>

    )
}

export default Nav3