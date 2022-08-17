import Apresentation from "../../components/organism/Apresentation"
import Header from "../../components/organism/Header"
import SectionSecundary from "../../components/organism/Section2"
import { ImageBackground } from "./style"

const Home = () => {
    return (
        <>
            <ImageBackground>
                <Header />
                <Apresentation />
            </ImageBackground>
            <SectionSecundary />
        </>
    )
}

export default Home