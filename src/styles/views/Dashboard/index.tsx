import { styled } from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  min-width: 90px;
  flex: 1;
`;

export const Number = styled.div`
  font-family: Metropolis;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`;

export const Title = styled.div`
  font-family: Metropolis;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
`;

export const TabContainer = styled.div`
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const ActionContainer = styled.div`
  display: flex;

  margin-top: 20px;
`;

export const IconContainer = styled.div``;
export const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 20px;
`;
