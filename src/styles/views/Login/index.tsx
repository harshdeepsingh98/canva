import { styled } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-family: DM-Sans-Regular !important;
    font-weight: 400;
    font-size: 30px;
    color: #fff;
  }

  p {
    font-family: DM-Sans-Regular !important;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
  }
`;

export const InputContainer = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;

  border: none !important;
  border-bottom: 1px solid #fff !important;
  border-radius: 0 !important;

  outline: none;

  background: #e95d4e;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`;

export const ErrorMessageContainer = styled.p`
  font-family: DM-Sans-Regular !important;
  font-weight: 400;
  font-size: 14px;
  color: black;
`;

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  text-align: center;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
