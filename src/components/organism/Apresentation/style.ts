import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: auto;
  gap: 56px;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ContainerContent = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;
export const ContainerSingUp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #621be5;
  border-radius: 20px;
  padding: 24px 47px;
  width: 860px;
  height: 208px;
  font-weight: 700;
  font-size: 26px;
  gap: 24px;
  color: rgba(255, 255, 255, 1);
  #email {
    background: rgba(26, 26, 26, 0.3);
    border-radius: 63px;
    border-style: none;
    padding: 16px 28px;
    width: 536px;
    height: 55px;
    ::placeholder {
      color: #fff;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 24px;
  button {
    padding: 8px 20px ;
    background-color: #ffff;
    font-weight: 700;
    font-size: 18px;
  }
`;
