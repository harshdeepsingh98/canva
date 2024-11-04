import {
  StepperContainer,
  StyledSteps,
  ContentContainer,
  DetailsContainer,
  DescriptionContainer,
  InputContainer,
  CheckboxContainer,
} from "styles/views/Credentials";
import { Button, Input, Checkbox, Space } from "antd";
import type { CheckboxProps } from "antd";
import { useState } from "react";

const { TextArea, Search } = Input;

const CredentialsView: React.FC = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const steps = [
    {
      title: "Space Details",
      content: (
        <DetailsContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Name*{" "}
              <span>
                A Unique name to Identify your space on the Dashboard. It can be
                the name of the your credential you want to issue.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="eg John Smith" />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Description{" "}
              <span>
                A description of space’s purpose. Space Name & Description Can
                Be Made Publicly Visible During Verification.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <TextArea
                placeholder="Description"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Do you want to show space details during verification?
              <CheckboxContainer>
                <Checkbox onChange={onChange}>
                  Show Space name & description
                </Checkbox>
                <Checkbox onChange={onChange}>Add Website URL</Checkbox>
              </CheckboxContainer>
            </DescriptionContainer>
            <InputContainer>
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Search
                    addonBefore="https://"
                    placeholder="input search text"
                    allowClear
                  />
                </Space.Compact>
              </Space>
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Tags{" "}
              <span>Increase the discoverability of this credential</span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="Add a Tag (Click Enter to add tag to the list)" />
            </InputContainer>
          </ContentContainer>
        </DetailsContainer>
      ),
    },
    {
      title: "Select Schema",
      content: "Second-content",
    },
    {
      title: "Select Design",
      content: "Last-content",
    },
    {
      title: "Add Records",
      content: "Last-content",
    },
    {
      title: "Send Credentials",
      content: "Last-content",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  //   const prev = () => {
  //     setCurrent(current - 1);
  //   };

  const handleCancel = () => {
    // Handle cancel logic (e.g., navigate back, reset the form, etc.)
    console.log("Canceled");
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    marginTop: 50,
  };
  return (
    <>
      <StepperContainer>
        <StyledSteps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "end" }}>
          {current === 0 && (
            <>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: "#1e3460" }}
              >
                Continue
              </Button>
            </>
          )}
        </div>
      </StepperContainer>
    </>
  );
};

export default CredentialsView;
