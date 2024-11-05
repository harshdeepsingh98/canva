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
  CreateSchemaContainer,
  DragandDropContainer,
  TitleContainer,
  CredentialContainerAttribute,
  BorderBottom,
  AddFieldContainer,
} from "styles/views/Credentials";
import { Button, Input, Checkbox, Space, Select } from "antd";
import type { CheckboxProps } from "antd";
import { useRef, useState } from "react";
import SearchImg from "images/svg/Search";
import type { TableColumnsType } from "antd";
import View from "images/png/View.png";
import Table from "components/Table";
import Plus from "images/png/Add.png";
import Trash from "images/png/Trash.png";
import AddField from "images/png/AddField.png";
import DragandDropAddCircle from "images/png/DragandDropAddCircle.png";
import Duplicate from "images/png/Duplicate.png";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { TextArea, Search } = Input;

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

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  beforeUpload: (file) => {
    const isJson =
      file.type === "application/json" || file.name.endsWith(".json");
    if (!isJson) {
      message.error("You can only upload JSON files!");
    }

    return isJson || Upload.LIST_IGNORE; // Ignore the file if it's not JSON
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CredentialsView: React.FC = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [isCreatingSchema, setIsCreatingSchema] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showManualSchema, setShowManualSchema] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const pageSize = 10; // Adjust page size if needed
  const totalPages = Math.ceil(dataSource.length / pageSize);
  const handleUploadJsonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/json") {
        message.error("You can only upload JSON files.");
        e.target.value = "";
        return;
      }

      // Handle the valid JSON file
      console.log("File selected:", file);
    }
  };

  const handleCreateSchemaManuallyClick = () => {
    setShowManualSchema(true); // Show manual schema component
  };

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

  const handleCreateSchemaClick = () => {
    setIsCreatingSchema(true); // Show the create schema view
  };

  const handleSelectChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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
      content: isCreatingSchema ? (
        <CreateSchemaContainer>
          <HeadingContainer>Create a Credential schema</HeadingContainer>
          <ContentContainer>
            <DescriptionContainer>
              Schema Name
              <span>
                Schema name is the name for the template. Everyone who views the
                credential can see it.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="Experience letter" />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Schema Description
              <span>
                A description of space’s purpose. Although not required, doing
                this is advised.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <TextArea
                placeholder="Schema will be use to create experience letter credential"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Credential Attributes
              <span>Add attributes that is required in schema.</span>
            </DescriptionContainer>
            <DragandDropContainer>
              {showManualSchema ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      padding: "20px",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <CredentialContainerAttribute>
                      <InputContainer>
                        <Input placeholder="Name" />
                      </InputContainer>
                      <InputContainer>
                        <Space wrap>
                          <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            onChange={handleSelectChange}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </Space>
                      </InputContainer>
                      <img
                        src={Trash}
                        style={{
                          height: "18px",
                          width: "18px",
                          position: "absolute",
                          right: "-20px",
                        }}
                      />
                    </CredentialContainerAttribute>
                    <InputContainer>
                      <TextArea
                        placeholder="Schema will be use to create experience letter credential"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                      />
                    </InputContainer>
                    <Checkbox onChange={onChange}>Request Info</Checkbox>
                    <BorderBottom />
                  </div>
                  <AddFieldContainer>
                    <img src={AddField} />
                    Add Field
                  </AddFieldContainer>
                </>
              ) : (
                <>
                  <TitleContainer>
                    You can choose to either import an existing JSON schema or
                    create a schema manually
                  </TitleContainer>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <img src={DragandDropAddCircle} />
                    </p>
                    <p className="ant-upload-hint">
                      Drag & Drop files here or <br />
                      Click on Upload JSON
                    </p>
                  </Dragger>
                  <div
                    style={{
                      padding: "20px 20px 20px 0",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button onClick={handleUploadJsonClick}>Upload JSON</Button>
                    <Button
                      type="primary"
                      onClick={handleCreateSchemaManuallyClick}
                      style={{ marginLeft: 8, background: "#1e3460" }}
                    >
                      Create Manually
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </>
              )}
            </DragandDropContainer>
          </ContentContainer>
        </CreateSchemaContainer>
      ) : (
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

  const next = () => {
    setCurrent(current + 1);
    setIsCreatingSchema(false);
    setShowManualSchema(false);
  };

  const prev = () => {
    setCurrent(current - 1);
    setIsCreatingSchema(false);
    setShowManualSchema(false);
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
          {current === 1 && !isCreatingSchema ? (
            <>
              <Button onClick={prev}>Back</Button>
              <Button
                type="primary"
                onClick={handleCreateSchemaClick}
                style={{ marginLeft: 8, background: "#1e3460" }}
              >
                <img src={Plus} />
                Create Schema
              </Button>
            </>
          ) : current === 1 && isCreatingSchema ? (
            <>
              <Button onClick={() => setIsCreatingSchema(false)}>Cancel</Button>
              <Button onClick={prev} style={{ marginLeft: 8 }}>
                Preview
              </Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: "#1e3460" }}
              >
                Publish and Continue
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </StepperContainer>
    </>
  );
};

export default CredentialsView;
