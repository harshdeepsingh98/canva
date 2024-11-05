import { Steps } from "antd";
import { styled } from "styled-components";

export const StepperContainer = styled.div`
  width: 100%;
`;

export const StyledSteps = styled(Steps)`
  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #1e3460; /* Icon background for the active step */
    border-radius: 4px; /* Square shape */
    border-color: #1e3460;
  }

  .ant-steps-item-icon {
    border-radius: 4px; /* Square shape for all steps */
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #1e3460; /* Icon background for completed steps */
    border-radius: 4px;
  }

  .ant-steps-item-process .ant-steps-item-content .ant-steps-item-title,
  .ant-steps-item-finish .ant-steps-item-content .ant-steps-item-title {
    color: #1e3460 !important; /* Text color for active and completed steps */
    font-weight: 600;
  }

  .ant-steps-item-tail::after {
    border-color: #d9d9d9; /* Color for the dotted line */
    border-style: dotted; /* Dotted style for the line */
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    border: 1px solid #1e3460;
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: white;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 20px;
`;

export const DescriptionContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;

  flex: 1;
  font-family: Metropolis;
  color: #1a1c25;

  span {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    text-align: left;
    color: #262626;
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  .ant-space-vertical {
    display: flex;
    width: 100%;
  }

  .ant-space-compact {
    width: 100%;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;

  .ant-checkbox + span {
    font-family: Metropolis;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
  }
`;

export const SelectSchemaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Metropolis;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  span {
    font-family: Metropolis;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  span {
    flex: 1;
  }

  button {
    border: none;
    background: #fff !important;
    box-shadow: none;
    &:focus {
      outline: none;
      background: transparent !important;
      box-shadow: none;
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;

  .primary {
    color: #fff;
    background: #1e3460;
  }
`;

export const IconContainer = styled.div``;
export const ButtonContainer = styled.button`
  padding: 10px 20px;
  border: 1px solid #1e3460;
  text-align: center;
  color: #1e3460;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: #fff;
`;
export const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const CreateSchemaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DragandDropContainer = styled.div`
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .ant-upload-wrapper .ant-upload-drag {
    background: #fff;
    border: 1px dashed #bdbdbd;
  }

  .ant-upload-wrapper {
    padding: 0 20px;
  }
`;

export const TitleContainer = styled.div`
  font-family: Metropolis;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  padding: 20px;
`;

export const CredentialContainerAttribute = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  .ant-select {
    width: 100% !important;
  }
  .ant-space {
    display: contents !important;
  }
  position: relative;
`;

export const BorderBottom = styled.div`
  border: 1px solid #e9e9e9;
`;

export const AddFieldContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  width: 100%;
  justify-content: start;
  padding: 0 20px 20px 20px;
`;

export const ModalTitle = styled.div`
  font-family: Metropolis;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalDescription = styled.div`
  font-family: Metropolis;
  font-size: 14px;
  font-weight: 400;
  line-height: 8px;
  text-align: center;
`;
