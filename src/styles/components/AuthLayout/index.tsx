import styled from "styled-components";
import { Space } from "antd";

export const StyledSpace = styled(Space)`
  span {
    width: 40px !important;
    height: 40px !important;
  }
`;

export const TitleContainer = styled.div`
  font-family: DM-Sans-Regular !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  color: black;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #1e3460;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
