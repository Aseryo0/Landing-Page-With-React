import { StyledButton } from "./style";
interface ButtonProps {
    nome: string
    background?: boolean
    colorBorder?: boolean;
    TextColor?: boolean;
    id?: any;
}
const Button = ({ nome, background, colorBorder, TextColor, id }: ButtonProps) => {
    return (

        <StyledButton background={background} colorBorder={colorBorder} TextColor={TextColor} id={id}>
            {nome}
        </StyledButton>
    )
}

export default Button;