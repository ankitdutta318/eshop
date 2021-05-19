import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// import { Counter } from "./pages/counter/Counter";
import BasicLayout from "./layouts/BasicLayout";
import { routes } from "./routes";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <Router>
        <BasicLayout>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ))}
          </Switch>
        </BasicLayout>
      </Router>
    </>
  );
}

export default App;
