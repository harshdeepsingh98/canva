/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Dropdown } from "antd";
import ProjectLogo from "images/png/Protean X logo.png";
import Dashboard from "images/png/Dashboard.png";
import Cred from "images/png/Cred.png";
import Schemas from "images/png/Schemas.png";
import Designer from "images/png/Designer.png";
import Verification from "images/png/Verification.png";
import Activity from "images/png/Activity.png";
import Subscription from "images/png/Subscription.png";
import Help from "images/png/Help.png";
import Plus from "images/png/Add.png";
import AvatarIcon from "images/png/Avatar.png";
import {
  TitleContainer,
  ButtonContainer,
  ProfileContainer,
  StyledSpace,
} from "styles/components/AuthLayout";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#f1f1f1",
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const menuItems: MenuProps["items"] = [
  { key: "1", label: "Dashboard", iconSrc: Dashboard },
  { key: "2", label: "Credentials", iconSrc: Cred },
  { key: "3", label: "Schemas", iconSrc: Schemas },
  { key: "4", label: "Designers", iconSrc: Designer },
  { key: "5", label: "Verification", iconSrc: Verification },
  { key: "6", label: "Activity", iconSrc: Activity },
  { key: "7", label: "Your Plan", iconSrc: Subscription },
  { key: "8", label: "Help", iconSrc: Help },
].map((item) => ({
  key: item.key,
  label: item.label,
  icon: (
    <img
      src={item.iconSrc}
      alt={`${item.label} icon`}
      style={{ width: 20, height: 20 }}
    />
  ),
}));

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logoutMenu = (
    <Menu
      items={[
        {
          key: "logout",
          label: "Logout",
          onClick: () => navigate("/"), // Redirect to the homepage
        },
      ]}
    />
  );

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div style={{ padding: "22px 4px" }}>
          <img src={ProjectLogo} alt="Project Logo" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          style={{ background: "#f1f1f1" }}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header
          style={{
            padding: "20px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #f1f1f1",
          }}
        >
          <TitleContainer>Dashboard</TitleContainer>
          <ProfileContainer>
            <ButtonContainer>
              <img src={Plus} />
              New Space
            </ButtonContainer>
            <StyledSpace>
              <Dropdown overlay={logoutMenu} trigger={["click"]}>
                <Avatar
                  src={<img src={AvatarIcon} alt="avatar" />}
                  style={{ cursor: "pointer" }}
                />
              </Dropdown>
            </StyledSpace>
          </ProfileContainer>
        </Header>
        <Content
          style={{
            overflow: "initial",
            background: "#fff",
            padding: "20px",
          }}
        >
          {children}
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
