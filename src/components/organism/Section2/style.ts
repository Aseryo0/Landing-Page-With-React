import styled from "styled-components";

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #f5f5f5;
  padding: 40px;
  background: linear-gradient(117.98deg, #1a1a1a 14.77%, #1d1056 117.86%);
  h2 {
    font-weight: 700;
    font-size: 32px;
    padding-bottom: 32px;
  }
`;

export const CardSection = styled.div`
  display: flex;
  gap: 20px;
  h2 {
    padding-bottom: 15px;
    font-weight: 700;
    font-size: 24px;
  }
  P {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ContenCard = styled.div`
  width: 412px;
  height: auto;
`;
