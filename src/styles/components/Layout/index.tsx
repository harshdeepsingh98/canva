import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1242px !important;
  margin: auto;
  min-height: 100vh !important;
  dispaly: flex;
  align-items: center !important;

  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  height: 500px;
  border: 2px solid #e95d4e;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  background: #e95d4e;
  flex: 1;
  height: 500px;
  padding: 50px;
`;
