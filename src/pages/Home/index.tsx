import Apresentation from "../../components/organism/Apresentation"
import Header from "../../components/organism/Header"
import { ImageBackground } from "./style"

const Home = () => {
    return (
        <>
            <ImageBackground>
                <Header />
                <Apresentation />
            </ImageBackground>
        </>
    )
}

export default Home