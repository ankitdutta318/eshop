import { useContext, useEffect } from "react";
import { Checkbox, Col, Row, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";

import { ProductsContext } from "../models";
import { fetchCategories } from "../services";
import { useLocation } from "react-router";

const Filter = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { search } = useLocation();

  useEffect(() => {
    if (state.categories.length === 0)
      (async () => {
        try {
          const res = await fetchCategories();
          dispatch({ type: "FETCH_CATEGORIES", payload: res.data });
        } catch (err) {}
      })();
  }, [dispatch, state.categories.length]);

  // get parms from url
  useEffect(() => {
    const params = new URLSearchParams(search);
  }, [search]);

  return (
    <Row gutter={[0, 16]}>
      <Col key="category">
        <Typography.Title level={5}>Category</Typography.Title>
        <Checkbox.Group>
          <Row gutter={[0, 6]}>
            {state.categories.map((category, index) => (
              <Col key={index} span={24}>
                <Checkbox value={category}>{category}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Col>
      <Col key="rating">
        <Typography.Title level={5}>Rating</Typography.Title>
        <Checkbox.Group>
          <Row gutter={[0, 6]}>
            <Col span={24}>
              <Checkbox key="4" value="four-plus">
                4 <StarFilled style={{ color: "#fadb14" }} /> and above
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox key="3" value="three-plus">
                3 <StarFilled style={{ color: "#fadb14" }} /> and above
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox key="2" value="two-plus">
                2 <StarFilled style={{ color: "#fadb14" }} /> and above
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox key="1" value="onw-plus">
                1 <StarFilled style={{ color: "#fadb14" }} /> and above
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Col>
    </Row>
  );
};

export default Filter;
