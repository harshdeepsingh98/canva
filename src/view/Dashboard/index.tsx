/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DescriptionContainer,
  Description,
  Number,
  Title,
  TabContainer,
  SearchContainer,
  TableContainer,
  ButtonContainer,
  ActionContainer,
  IconContainer,
} from "styles/views/Dashboard";
import { Tabs, Input, Dropdown, Button } from "antd";
import Search from "images/svg/Search";
import type { TableColumnsType, TableProps } from "antd";
import Plus from "images/png/AddCircle.png";
import MenuIcon from "images/png/Menu.png";
import type { MenuProps } from "antd";
import { useState } from "react";
import Edit from "images/svg/Edit";
import Archive from "images/svg/Archive";
import Delete from "images/svg/Delete";
import View from "images/svg/View";
import Table from "components/Table";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  Credential: string;
  Created: string;
  CreatedOn: string;
  Schema: string;
  Records: number;
  Issued: number;
  Revoked: number;
  Action: React.ReactNode;
}

const columns: TableColumnsType<DataType> = [
  { title: "Credential Title", dataIndex: "Credential" },
  { title: "Created By", dataIndex: "Created" },
  { title: "Created On", dataIndex: "CreatedOn" },
  { title: "Schema Type", dataIndex: "Schema" },
  { title: "Records", dataIndex: "Records" },
  { title: "Issued", dataIndex: "Issued" },
  { title: "Revoked", dataIndex: "Revoked" },
  { title: "Action", dataIndex: "Action" },
];

const tableMenu: MenuProps["items"] = [
  {
    key: "1",
    label: "Edit Details",
    icon: <Edit />,
  },
  {
    key: "2",
    label: "Delete",
    icon: <Delete />,
  },
  {
    key: "3",
    label: "Archive",
    icon: <Archive />,
  },
  {
    key: "4",
    label: "View",
    icon: <View />,
  },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    Credential: `Offer Letter`,
    Created: "Utkarsh Bafna",
    CreatedOn: `08 May 2024`,
    Schema: "Offer Letter Sche...",
    Records: 32,
    Issued: 32,
    Revoked: 32,
    Action: (
      <ActionContainer>
        <ButtonContainer>
          <img src={Plus} />
          Add Record
        </ButtonContainer>
        <IconContainer>
          <Dropdown menu={{ items: tableMenu }}>
            <img src={MenuIcon} alt="menu" />
          </Dropdown>
        </IconContainer>
      </ActionContainer>
    ),
  }),
);

const DashboardView: React.FC = () => {
  const detail = [
    { number: "09", title: "Spaces" },
    { number: "09", title: "Credentials" },
    { number: "09", title: "Organizations" },
    { number: "09", title: "Schemas" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Adjust page size if needed
  const totalPages = Math.ceil(dataSource.length / pageSize);

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

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <DescriptionContainer>
        {detail.map((detail, i) => (
          <Description key={i}>
            <Number>{detail.number}</Number>
            <Title>{detail.title}</Title>
          </Description>
        ))}
      </DescriptionContainer>
      <TabContainer>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Spaces",
              key: "1",
            },

            {
              label: "Archive",
              key: "3",
            },
          ]}
        />
      </TabContainer>
      <SearchContainer>
        <Input
          size="large"
          placeholder="Search for spaces"
          prefix={<Search />}
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
          selectedRowKeys={selectedRowKeys}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={paginatedData}
        />
      </TableContainer>
    </>
  );
};

export default DashboardView;
