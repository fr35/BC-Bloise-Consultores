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
                        <li className="center" style={li}>Inicio</li>
                        <li className="center" style={li}>Productos</li>
                        <li className="center" style={li}>Staff</li>
                        <li className="center" style={li}>Clientes</li>
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