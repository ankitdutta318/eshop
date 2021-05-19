import { Layout, Menu, Breadcrumb, Badge, Divider } from "antd";
import { ShoppingOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const { Header, Footer, Content } = Layout;

interface IBasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: IBasicLayoutProps) => {
  const { pathname } = useLocation();
  const [activeMenuKey, setActiveMenuKey] = useState<any>("");

  return (
    <Layout>
      <Header className="header">
        <span>
          <Link key="Home" to="/" onClick={() => setActiveMenuKey(undefined)}>
            eShop
          </Link>
        </span>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={activeMenuKey && [`${activeMenuKey}`]}
          onClick={({ key }) => setActiveMenuKey(key)}
          collapsedWidth={400}
        >
          <Menu.Item key="products">
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
        <span
          key="cart"
          style={{ position: "absolute", right: 0, paddingRight: 50 }}
        >
          <Link to="/cart" onClick={() => setActiveMenuKey(undefined)}>
            <Badge count={1} overflowCount={9} offset={[5, 0]}>
              <ShoppingOutlined
                style={{ fontSize: 20, color: "rgba(0,0,0,0.85)" }}
              />
            </Badge>
          </Link>
        </span>
      </Header>
      <Divider style={{ margin: 0 }} />
      <Content
        style={{
          padding: "0 20px",
          background: "#fff",
          minHeight: "85vh",
          paddingBottom: 50,
        }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
          {pathname.split("/").map(
            (item, index) =>
              item && (
                <Breadcrumb.Item key={index}>
                  <Link to={item}>
                    {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                  </Link>
                </Breadcrumb.Item>
              )
          )}
        </Breadcrumb>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        eShop ©2021 Created by Ankit Dutta
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
