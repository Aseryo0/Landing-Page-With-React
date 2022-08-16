import Button from "../../atom/Button"
import { ContainerContent, ContainerForm, ContainerSection, ContainerSingUp } from "./style"

export const Apresentation = () => {
    return (
        <ContainerSection>
            <ContainerContent>
                <p>How One Supernova Measured The Universe</p>
                <h3>In 2015 astronomers successfully predicted the appearance of a supernova <br /> within a couple weeks. How did they do it?</h3>
            </ContainerContent>
            <ContainerSingUp>
                <p>SING UP and watch this documentary and other titles!</p>
                <ContainerForm>
                    <label htmlFor="email" />
                    <input type="email" id="email" placeholder="example@email.com" />
                    <Button nome={"SING UP NOW!"} TextColor></Button>
                </ContainerForm>
                <h3>Ready to watch? Enter your email and enjoy the best of our content.</h3>
            </ContainerSingUp>
        </ContainerSection>
    )
}

export default Apresentation