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
import { Tabs, Input, Dropdown } from "antd";
import Search from "images/svg/Search";
import type { TableColumnsType, TableProps } from "antd";
import Plus from "images/png/Add.png";
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
    extra: "⌘S",
  },
  {
    key: "2",
    label: "Delete",
    icon: <Delete />,
    extra: "⌘S",
  },
  {
    key: "3",
    label: "Archive",
    icon: <Archive />,
    extra: "⌘S",
  },
  {
    key: "4",
    label: "View",
    icon: <View />,
    extra: "⌘S",
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

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

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
      </SearchContainer>
      <TableContainer>
        <Table
          start={start}
          hasSelected={hasSelected}
          loading={loading}
          selectedRowKeys={selectedRowKeys}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        />
      </TableContainer>
    </>
  );
};

export default DashboardView;
