import { StyledButton } from "./style";
interface ButtonProps {
    nome: string
    background?: boolean
    fontWeight?: boolean
    colorBorder?: boolean;
    TextColor?: boolean;
}
const Button = ({ nome, background, fontWeight, colorBorder, TextColor }: ButtonProps) => {
    return (

        <StyledButton background={background} fontWeight={fontWeight} colorBorder={colorBorder} TextColor={TextColor}>
            {nome}
        </StyledButton>
    )
}

export default Button;