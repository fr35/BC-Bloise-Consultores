import { Route } from "react-router-dom"

export default function Background() {
    const imgLogo = {height: '120px', position: 'absolute', top: '3%', left: '3%'}
    const imgBsAs = {width: '100%', height: '100vh'}
    const backTextContainer = {position: 'absolute', color: 'white', top: '30%', left: '3%'}
    const backUbicacionContainer = {position: 'absolute', color: 'white', bottom: '20%', right: '10%'}
    const ubi = {}
    return (
        <section>
            <img src="fotos/Logo-BC.png" alt="logo" className="navbar" style={imgLogo}/>
            <img src="https://i.pinimg.com/originals/ae/1f/41/ae1f41480e0e86ff2056edc6b707d960.jpg" alt="back" style={imgBsAs}/>
            <div style={backTextContainer}>
                <h2>Consultora especializada en</h2>
                <ul>
                    <li>Servicios actuariales</li>
                    <li>Financieros</li>
                    <li>Softwares actuariales</li>
                    <li>Reportes económicos</li>
                    <li>Reportes actuariales</li>
                </ul>
            </div>
            <div style={backUbicacionContainer}>
                <h2>Ubicada a metros del obelisco</h2>
                <button style={ubi}> Ver Ubicación</button>
            </div>
        </section>
    )
}


//Consultora especializada en servicios actuariales - financieros - softwares actuariales - reportes económicos.actuariales - reportes económicos.