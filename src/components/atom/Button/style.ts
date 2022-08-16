import { COLORS } from "./../../../common/index";
import styled from "styled-components";
interface ButtonProps {
  background?: boolean;
  fontWeight?: boolean;
  colorBorder?: boolean;
  TextColor?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 125px;
  padding: 12px 40px;
  color: ${({ TextColor }) => (TextColor ? "#6200EA" : "#f5f5f5")};
  background: ${({ background }) =>
    background ? `${COLORS.primary_color}` : "transparent"};
  font-weight: ${({ fontWeight }) => (fontWeight ? "600" : "")};
  border: ${({ colorBorder }) => (colorBorder ? "solid 1px #fff" : "none")};

  cursor: pointer;
`;
