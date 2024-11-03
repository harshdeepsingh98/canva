import { Button, Flex, Table } from "antd";

interface TableProps {
  start: () => void;
  hasSelected: boolean;
  loading: boolean;
  selectedRowKeys: React.Key[];
  rowSelection: any;
  columns: any;
  dataSource: any;
}

const TableComponent: React.FC<TableProps> = ({
  start,
  hasSelected,
  loading,
  selectedRowKeys,
  rowSelection,
  columns,
  dataSource,
}) => {
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </Flex>
  );
};

export default TableComponent;
