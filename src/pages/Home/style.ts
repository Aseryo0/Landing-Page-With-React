import { COLORS } from "./../../common/index";
import styled from "styled-components";
import { image } from "../../assets";

export const ImageBackground = styled.div`
  background-image: url(${image.background});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 52px;
`;
