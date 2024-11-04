/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StepperContainer,
  StyledSteps,
  ContentContainer,
  DetailsContainer,
  DescriptionContainer,
  InputContainer,
  CheckboxContainer,
  SelectSchemaContainer,
  HeadingContainer,
  SearchContainer,
  ActionContainer,
  ButtonContainer,
  TableContainer,
} from "styles/views/Credentials";
import { Button, Input, Checkbox, Space } from "antd";
import type { CheckboxProps } from "antd";
import { useState } from "react";
import SearchImg from "images/svg/Search";
import type { TableColumnsType } from "antd";
import View from "images/png/View.png";
import Table from "components/Table";
import Plus from "images/png/Add.png";
import Duplicate from "images/png/Duplicate.png";

const { TextArea, Search } = Input;

// type TableRowSelection<T extends object = object> =
//   TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  Schema: string;
  Created: string;
  CreatedOn: string;
  Updated: string;
  Action: React.ReactNode;
}

const columns: TableColumnsType<DataType> = [
  { title: "Schema Name", dataIndex: "Schema" },
  { title: "Created By", dataIndex: "Created" },
  { title: "Created On", dataIndex: "CreatedOn" },
  { title: "Last Updated", dataIndex: "Updated" },
  { title: "Action", dataIndex: "Action" },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    Schema: `Offer Letter`,
    Created: "Utkarsh Bafna",
    CreatedOn: `08 May 2024`,
    Updated: "15 June 2024",
    Action: (
      <ActionContainer>
        <ButtonContainer>
          <img src={View} />
          View
        </ButtonContainer>
        <ButtonContainer className="primary">
          <img src={Duplicate} />
          Duplicate
        </ButtonContainer>
      </ActionContainer>
    ),
  }),
);

const CredentialsView: React.FC = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Adjust page size if needed
  const totalPages = Math.ceil(dataSource.length / pageSize);
  //   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  //   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //     setSelectedRowKeys(newSelectedRowKeys);
  //   };

  //   const rowSelection: TableRowSelection<DataType> = {
  //     selectedRowKeys,
  //     onChange: onSelectChange,
  //   };

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
      content: (
        <SelectSchemaContainer>
          <HeadingContainer>
            Select a Credential Schema{" "}
            <span>
              A schema serves as a template for credentials used by issuers and
              verifiers It contains certain credential details like name,
              license number, date of issue, etc
            </span>
          </HeadingContainer>
          <SearchContainer>
            <Input
              size="large"
              placeholder="Search for spaces"
              prefix={<SearchImg />}
            />
            <div style={{ flex: 1, textAlign: "end" }}>
              <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                {"<"}
              </Button>
              <span>
                {currentPage} / {totalPages}
              </span>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                {">"}
              </Button>
            </div>
          </SearchContainer>
          <TableContainer>
            <Table
              selectedRowKeys={[]}
              rowSelection={null}
              columns={columns}
              dataSource={paginatedData}
            />
          </TableContainer>
        </SelectSchemaContainer>
      ),
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

  const prev = () => {
    setCurrent(current - 1);
  };

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
          {current === 1 && (
            <>
              <Button onClick={prev}>Back</Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: "#1e3460" }}
              >
                <img src={Plus} />
                Create Schema
              </Button>
            </>
          )}
        </div>
      </StepperContainer>
    </>
  );
};

export default CredentialsView;
