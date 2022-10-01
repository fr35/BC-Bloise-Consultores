export default function Background() {
    const h2 = {margin: 0,}
    const padding = {paddingTop: '100px', paddingLeft: '1vw'}
    return (
        <section className="background">
            <div style={padding}>
                <h2 className="background-text" style={h2}>Consultora especializada en servicios</h2>
                <ul className="background-text">
                <li><h2 style={h2}>Actuariales</h2></li>
                <li><h2 style={h2}>Financieros</h2></li>
                <li><h2 style={h2}>Softwares actuariales</h2></li>
                <li><h2 style={h2}>Reportes económicos actuariales</h2></li>
                <li><h2 style={h2}>Reportes económicos</h2></li>
                </ul>
            </div>
        </section>
    )
}