import styled from "styled-components";

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 530px;
  height: 65vh;
  border: 2px solid #e95d4e;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  background: #e95d4e;
  flex: 1;
  min-height: 530px;
  height: 65vh;
  padding: 50px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  img {
    height: 40px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  margin-top: 20px;

  img {
    height: 20px;
  }
`;
