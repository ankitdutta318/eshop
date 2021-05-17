import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;

interface IBasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: IBasicLayoutProps) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Products</Menu.Item>
          <Menu.Item key="2">About Us</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", minHeight: "80vh" }}>
          {children}
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        eShop 2021 Created by Ankit Dutta
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
