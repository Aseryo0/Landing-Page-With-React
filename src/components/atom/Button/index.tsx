import { StyledButton } from "./style";
interface ButtonProps {
    nome: string
    background?: boolean
    fontWeight?: boolean
    colorBorder?: boolean;
}
const Button = ({ nome, background, fontWeight, colorBorder }: ButtonProps) => {
    return (

        <StyledButton background={background} fontWeight={fontWeight} colorBorder={colorBorder}>
            {nome}
        </StyledButton>
    )
}

export default Button;