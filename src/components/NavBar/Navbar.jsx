import { Link } from "react-router-dom"

export default function Navbar() {
    const header = {display: 'flex', alignItems: 'center', backgroundColor: 'black', width: '100%'}
    const container = {width: '100%', paddingRight: '2vw', paddingLeft: '2vw'}
    const imgSize = {height: '10vh'}
    const li = {fontSize: '15px', listStyle: 'none', paddingRight: '20px', color: 'white'}
    const mode = {paddingRight: '2vw', color: 'white'}
    return (
        <nav style={header}>
            <div className="between" style={container}>
                <div>
                    <img src="fotos/Logo-BC.png" alt="logo" className="navbar" style={imgSize}/>
                </div>
                <div className="center">
                    <ul className="around">
                        <li className="center" style={li}><Link to={'/'}>Inicio</Link></li>
                        <li className="center" style={li}><Link to={'/productos'}>Productos</Link></li>
                        <li className="center" style={li}><Link to={'/staff'}>Staff</Link></li>
                        <li className="center" style={li}><Link to={'/Clientes'}>Clientes</Link></li>
                        <li className="center" style={li}>Audio</li>
                    </ul>
                </div>
                <div style={mode} className='around'>
                    <div>
                        <p>Search</p>
                    </div>
                    <div>
                        <h6 className="label-dark">Dark</h6>
                        <div className="toggle-switch"></div>
                        <h6 className="label-light">Light</h6>
                    </div>
                </div>
            </div>
        </nav>
    )
}