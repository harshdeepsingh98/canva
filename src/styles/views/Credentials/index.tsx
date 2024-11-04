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
  width: 100%;
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
