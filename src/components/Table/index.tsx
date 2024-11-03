import { Flex, message } from "antd";
import { useEffect } from "react";
import {
  StyledTable,
  ButtonContainer,
  ButtonContent,
} from "styles/components/Table";
import Archive from "images/svg/Archive";
import Delete from "images/svg/Delete";

interface TableProps {
  selectedRowKeys: React.Key[];
  rowSelection: any;
  columns: any;
  dataSource: any;
}

const TableComponent: React.FC<TableProps> = ({
  selectedRowKeys,
  rowSelection,
  columns,
  dataSource,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const messageKey = "selected-message";

  useEffect(() => {
    if (selectedRowKeys.length > 0) {
      // Show or update message when items are selected
      messageApi.open({
        key: messageKey,
        content: (
          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#1A1C25",
              alignItems: "center",
            }}
          >
            {selectedRowKeys.length} Spaces Selected
            <ButtonContainer>
              <ButtonContent>
                <Delete />
                Delete
              </ButtonContent>
              <ButtonContent>
                <Archive />
                Archive
              </ButtonContent>
            </ButtonContainer>
          </div>
        ),
        duration: 0, // Keeps message visible until manually closed
        type: "info",
      });
    } else {
      // Clear the message when no items are selected
      messageApi.destroy(); // Remove the message
    }
  }, [selectedRowKeys.length, messageApi]);
  return (
    <>
      {contextHolder}
      <Flex gap="middle" vertical style={{ width: "100%" }}>
        <StyledTable
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </Flex>
    </>
  );
};

export default TableComponent;
