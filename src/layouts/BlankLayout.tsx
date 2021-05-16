import { Layout } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;

interface IBlankLayoutProps {
  children: React.ReactNode;
}

const BlankLayout = ({ children }: IBlankLayoutProps) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default BlankLayout;
