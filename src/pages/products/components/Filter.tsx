import { useState, useContext, useEffect } from "react";
import { Checkbox, Col, Drawer, Button, Row, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";

import { ProductsContext } from "../models";
import { fetchCategories } from "../services";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

interface IFilterProps {
  visible: boolean;
  setVisible: (boolean) => void;
  handleClearAllFilters: () => void;
}

const Filter = ({
  visible,
  setVisible,
  handleClearAllFilters,
}: IFilterProps) => {
  const { state, dispatch } = useContext(ProductsContext);
  const history = useHistory();
  const { search } = useLocation();

  const [categoryValues, setCategoryValues] = useState<CheckboxValueType[]>([]); // category values filter state
  const [ratingValues, setRatingValues] = useState<CheckboxValueType[]>([]); // rating values filter state

  useEffect(() => {
    if (state.categories.length === 0)
      (async () => {
        try {
          const res = await fetchCategories();
          dispatch({ type: "FETCH_CATEGORIES", payload: res.data });
        } catch (err) {}
      })();
  }, [dispatch, state.categories.length]);

  // on load set state from query params
  useEffect(() => {
    const query = new URLSearchParams(search);
    if (query.has("category"))
      setCategoryValues(query.get("category").split(","));
    if (query.has("rating")) setRatingValues(query.get("rating").split(","));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    // caterory change
    if (categoryValues.length) {
      params.append("category", categoryValues.join());
    } else {
      params.delete("category");
    }

    // rating change
    if (ratingValues.length) {
      params.append("rating", ratingValues.join());
    } else {
      params.delete("rating");
    }
    history.push({ search: params.toString() });
  }, [categoryValues, ratingValues, history]);

  // handle filter clear
  const handleFilterClear = () => {
    setCategoryValues([]);
    setRatingValues([]);
    handleClearAllFilters();
  };

  return (
    <Drawer
      title="Filter"
      placement="right"
      width={400}
      visible={visible}
      bodyStyle={{ overflow: "auto" }}
      footer={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="link" onClick={handleFilterClear}>
            Clear All
          </Button>
          <Button type="primary" onClick={() => setVisible(false)}>
            Apply Filter
          </Button>
        </div>
      }
      getContainer={false}
      onClose={() => setVisible(false)}
    >
      <Row gutter={[0, 16]}>
        <Col key="category">
          <Typography.Title level={5}>Category</Typography.Title>
          <Checkbox.Group
            value={categoryValues}
            onChange={(values) => setCategoryValues(values)}
          >
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
          <Checkbox.Group
            value={ratingValues}
            onChange={(values) => setRatingValues(values)}
          >
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
                <Checkbox key="1" value="one-plus">
                  1 <StarFilled style={{ color: "#fadb14" }} /> and above
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Col>
      </Row>
    </Drawer>
  );
};

export default Filter;
