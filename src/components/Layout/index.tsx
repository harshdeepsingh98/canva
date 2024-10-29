import React, { ReactNode } from "react";
import NavBar from "components/NavBar";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
} from "styles/components/Layout";
import Footer from "components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <MainContainer>
        <LeftContainer>
          <img src="https://studio.proteanx.io/static/media/brand_main_log_pic.839729f583d4c91f21c31c7cd6fb0e42.svg" />
        </LeftContainer>
        <RightContainer>{children}</RightContainer>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;
