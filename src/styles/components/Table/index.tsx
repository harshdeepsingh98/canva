import styled from "styled-components";
import { Table as AntTable } from "antd";

// Styled wrapper for Ant Design's Table
export const StyledTable = styled(AntTable)`
  .ant-table-container {
    border: 1px solid #f1f1f1 !important;
  }
  .ant-table-tbody {
    border: 1px solid #f1f1f1;
  }
  .ant-table-thead > tr > th {
    background-color: #fff !important;

    // color: #f1f1f1 !important;
    // border-right: none !important;
  }

  .ant-table-tbody > tr > td {
    // border-right: none !important;
  }

  .ant-table-thead > tr > th:not(:last-child)::before,
  .ant-table-tbody > tr > td:not(:last-child)::before {
    display: none !important;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonContent = styled.button`
  padding: 10px 20px;
  border: 1px solid #1e3460;
  text-align: center;
  color: #1e3460;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: #fff;
  height: 40px;
`;
