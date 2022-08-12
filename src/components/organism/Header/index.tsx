import { image } from "../../../assets"
import Button from "../../atom/Button"
import { CardButton, CardHeader } from "./style"

export const Header = () => {
    return (
        <CardHeader>
            <img src={image.logo} alt="logo-site" />
            <CardButton>
                <Button nome="Login" colorBorder />
                <Button nome="Sing up" background fontWeight />
            </CardButton>
        </CardHeader>
    )
}

export default Header