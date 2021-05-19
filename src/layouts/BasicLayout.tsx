import { Layout, Menu, Breadcrumb } from "antd";
import { ShoppingOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header, Footer, Content } = Layout;

interface IBasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: IBasicLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Header className="header">
        <span>
          <Link key="Home" to="/">
            eShop
          </Link>
        </span>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          multiple={false}
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
          <Link to="/cart">
            <ShoppingOutlined
              style={{ fontSize: 20, color: "rgba(0,0,0,0.85)" }}
            />
          </Link>
        </span>
      </Header>
      <Content style={{ padding: "0 20px", background: "#fff" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined />
            </Link>
          </Breadcrumb.Item>
          {pathname.split("/").map(
            (item) =>
              item && (
                <Breadcrumb.Item>
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
        eShop 2021 Created by Ankit Dutta
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
