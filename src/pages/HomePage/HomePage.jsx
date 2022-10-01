import Background from "../../components/Background/Background"
import HomeSection from "../../components/HomeSection/HomeSection"

export default function HomePage() {
    const main = {marginBottom: '500px'}
    return (
        <main style={main}>
            <Background/>
            <HomeSection/>
        </main>
    )
}